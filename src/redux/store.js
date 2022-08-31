import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
// import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

// console.log('store', store.getState());
