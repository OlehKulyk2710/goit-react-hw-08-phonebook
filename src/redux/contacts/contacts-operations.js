import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log('getContacts', data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const createContact = createAsyncThunk(
  'contacts/createContacts',
  async contactData => {
    try {
      const { data } = await axios.post('/contacts', contactData);
      console.log('createContact', data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const contactsOperations = {
  getContacts,
  createContact,
  deleteContact,
};
