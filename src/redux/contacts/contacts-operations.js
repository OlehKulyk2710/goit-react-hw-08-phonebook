import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
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
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (updatedData, thunkAPI) => {
    const { id: contactId, name, number } = updatedData;
    try {
      const { data } = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });

      const items = thunkAPI.getState().contacts.items;
      const updatedItems = items.map(item => {
        return item.id === data.id ? data : item;
      });

      return updatedItems;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const contactsOperations = {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
};
