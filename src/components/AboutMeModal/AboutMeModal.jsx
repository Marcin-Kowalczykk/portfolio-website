import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Shadow from './Shadow';
import ModalContent from './ModalContent';

const AboutMeModal = ({ onShowModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Shadow onShowModal={onShowModal} />,
        document.getElementById('shadow-root')
      )}
      {ReactDOM.createPortal(
        <ModalContent onShowModal={onShowModal} />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default AboutMeModal;
