import css from '../components/App/App';
import { Container } from '../components';

import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from 'redux/contactsApi';

export const Contacts = () => {
  const { data } = useGetContactsQuery();

  return (
    <>
      <Container>
        <h1 className={css.title__phonebook}>Phonebook</h1>
        {data && <ContactForm contacts={data} />}

        <h2 className={css.title__contacts}>Contacts</h2>
        <Filter />
        {data && <ContactList contacts={data} />}
      </Container>
      <Toaster position="top-left" />
    </>
  );
};
