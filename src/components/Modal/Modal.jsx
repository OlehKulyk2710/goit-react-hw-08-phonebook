import { Container, EditContactForm, Heading } from 'components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, WorkSpace } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ id, name, number, onModalClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEvents);
  });

  function handleEvents(event) {
    if (event.key === 'Escape' || event.currentTarget === event.target) {
      window.removeEventListener('keydown', handleEvents);
      onModalClose();
    }
  }

  return createPortal(
    <Overlay onClick={handleEvents}>
      <Container>
        <WorkSpace>
          <Heading>Edit contact </Heading>
          <EditContactForm
            id={id}
            name={name}
            number={number}
            onModalClose={onModalClose}
          />
        </WorkSpace>
      </Container>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
