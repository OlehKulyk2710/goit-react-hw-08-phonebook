import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { contactsSelectors } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const filter = useSelector(contactsSelectors.getFilterValue);
  const contacts = useSelector(contactsSelectors.getContacts);

  const normalizedFilter = filter.toLowerCase();
  const contactsByFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {contactsByFilter.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
