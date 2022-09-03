import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Heading, Title } from 'components';
import { contactsOperations } from 'redux/contacts/contacts-operations';

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
