import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { contactsOperations } from 'redux/contacts/contacts-operations';
// import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(contactsOperations.deleteContact(id));
  };
  return (
    <li className={css.contacts__item}>
      {name}: <span>{number}</span>
      <button type="button" className={css.contacts__btn} onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
