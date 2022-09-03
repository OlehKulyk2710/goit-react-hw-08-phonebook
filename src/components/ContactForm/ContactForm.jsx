import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { contactsSelectors } from 'redux/contacts/contacts-selectors';
import { CONSTANTS } from 'services/constants';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleChange = event => {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    switch (inputName) {
      case CONSTANTS.name:
        setName(inputValue);
        break;
      case CONSTANTS.number:
        setNumber(inputValue);
        break;
      default:
        console.log('Unrecognized input name: ', { inputName });
    }
  };

  const checkNewName = name => {
    const newName = name.toLowerCase();
    const isNameExist = contacts.filter(
      item => item.name.toLowerCase() === newName
    );
    return isNameExist.length;
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isNameExist = checkNewName(name);
    if (isNameExist) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(contactsOperations.createContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          type="text"
          name={CONSTANTS.name}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          className={css.form__input}
          type="tel"
          name={CONSTANTS.number}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.btn__submit}>
        Add contact
      </button>
    </form>
  );
};
