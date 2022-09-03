import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  fetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: state => {
      state.isLoggedIn = false;
    },
    [authOperations.getCurrentUser.pending]: state => {
      state.fetchingCurrentUser = true;
    },
    [authOperations.getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.fetchingCurrentUser = false;
    },
    [authOperations.getCurrentUser.rejected]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false;
      state.fetchingCurrentUser = false;
    },
    [authOperations.logIn.rejected]: state => {
      state.isLoggedIn = false;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
