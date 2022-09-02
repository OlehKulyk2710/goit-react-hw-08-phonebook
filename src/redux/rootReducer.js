import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import filterReducer from './filterSlice';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  auth: authPersistedReducer,
});
