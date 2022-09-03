import { ContactItem } from 'components';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/contacts-selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(contactsSelectors.getFilterValue);
  const contacts = useSelector(contactsSelectors.getContacts);

  const normalizedFilter = filter.toLowerCase();
  const contactsByFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.contacts__list}>
      {contactsByFilter.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
