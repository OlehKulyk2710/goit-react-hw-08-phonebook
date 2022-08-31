import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import itemsReducer from './itemsSlice';
import authReducer from './auth/auth-slice';

export const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  auth: authReducer,
});
