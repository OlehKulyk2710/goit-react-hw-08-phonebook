import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/auth/auth-operations';
import { contactsOperations } from './contacts-operations';

const initialState = [];

const contactsSlice = createSlice({
  name: 'items',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled]: (_, action) => {
      return action.payload;
    },
    [contactsOperations.createContact.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [contactsOperations.deleteContact.fulfilled]: (state, action) => {
      const contactId = action.payload;
      const newState = state.filter(item => item.id !== contactId);
      return newState;
    },
    [authOperations.logOut.fulfilled]: state => {
      return [];
    },
  },
});

export default contactsSlice.reducer;
