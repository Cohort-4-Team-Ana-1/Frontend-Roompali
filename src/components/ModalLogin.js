import React, { useState } from "react";
import Modal from "react-modal";

export const ModalLogin = () => {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalLoginIsOpen(true)}>
        Open Modal Login
      </button>
      <Modal
        isOpen={modalLoginIsOpen}
        onRequestClose={() => setModalLoginIsOpen(false)}
      >
        <h2>Modal Title Login</h2>
        <p>Modal Body Login</p>
        <div>
          <button onClick={() => setModalLoginIsOpen(false)}>Exit</button>
        </div>
      </Modal>
    </div>
  );
};
