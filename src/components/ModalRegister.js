import React, { useState } from "react";
import Modal from "react-modal";

export const ModalRegister = () => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalRegisterIsOpen(true)}>
        Open Modal Register
      </button>
      <Modal
        isOpen={modalRegisterIsOpen}
        onRequestClose={() => setModalRegisterIsOpen(false)}
      >
        <h2>Modal Title Register</h2>
        <p>Modal Body Register</p>
        <div>
          <button onClick={() => setModalRegisterIsOpen(false)}>Exit</button>
        </div>
      </Modal>
    </div>
  );
};
