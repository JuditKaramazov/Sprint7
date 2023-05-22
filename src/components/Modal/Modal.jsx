import React from 'react';
import { ModalMessage, Overlay } from '../SecondaryForm/SecondaryForm.styled';

export const Modal = ({ children, showModal, setShowModal }) =>
  showModal && (
    <Overlay id="modal" onClick={() => setShowModal(false)}>
      <ModalMessage id="message">{children}</ModalMessage>
    </Overlay>
  );
