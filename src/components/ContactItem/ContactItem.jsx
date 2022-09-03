import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { BiEdit } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import css from './ContactItem.module.css';
import { Modal } from 'components';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const handleModal = () => {
    setIsModal(false);
  };

  const handleEditClick = () => {
    setIsModal(true);
  };
  return (
    <>
      <li className={css.contacts__item}>
        {<BsDot style={{ scale: '1.5' }} />}
        <p className={css.contacts__text}>
          {name}: <span>{number}</span>
        </p>
        <div className={css.btn__wrapper}>
          <button
            type="button"
            className={css.contacts__btn}
            onClick={handleClick}
          >
            Delete
          </button>
          <button
            type="button"
            className={css.edit__btn}
            onClick={handleEditClick}
          >
            {<BiEdit style={{ width: '100%', height: '100%' }} />}
          </button>
        </div>
      </li>
      {isModal && (
        <Modal id={id} name={name} number={number} onModalClose={handleModal} />
      )}
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
