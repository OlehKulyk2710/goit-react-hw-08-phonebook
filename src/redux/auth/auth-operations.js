import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      toast.error(
        `User ${credentials.name} probably exist or something went wrong. Try Log in.`
      );
      return thunkAPI.rejectWithValue();
    }
  }
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.contacts.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue({ name: null, email: null });
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue({ name: null, email: null });
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    toast.error('Incorrect Email or Password. Try again.');
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
    toast.error('Something went wrong :(');
  }
});

const authOperations = { register, getCurrentUser, logIn, logOut };

export default authOperations;
