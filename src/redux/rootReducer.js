import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import itemsReducer from './itemsSlice';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';

export const rootReducer = combineReducers({
  items: itemsReducer,
  itemsNew: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});
