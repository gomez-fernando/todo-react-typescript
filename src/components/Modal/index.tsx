import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import '../../styles/modal.css';

type ModalProps = {
  children: ReactNode;
}

function Modal({children}: ModalProps){

  const modalRoot = document.querySelector('#modal') as HTMLElement;

  return ReactDOM.createPortal(
    <div className="modal">
      {children}

    </div>,
    modalRoot
  );
}

export { Modal };