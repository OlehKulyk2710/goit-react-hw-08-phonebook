import { useEffect } from 'react';
import css from '../components/App/App';
import { Container } from '../components';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';

export const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1 className={css.title__phonebook}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.title__contacts}>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
      <Toaster position="top-left" />
    </>
  );
};
