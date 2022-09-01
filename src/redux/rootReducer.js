import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';

export const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});
