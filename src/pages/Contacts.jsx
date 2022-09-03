import { useEffect } from 'react';
import { Heading, Title } from 'components';
import { Container } from '../components';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

import { ContactForm, ContactList } from 'components';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Heading>Phonebook</Heading>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Container>
      <Toaster position="top-left" />
    </>
  );
};

export default Contacts;
