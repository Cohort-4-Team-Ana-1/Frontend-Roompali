import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export const App = () => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);

  return (
    <div>
      <h1>Frontend Roompali</h1>
      <button onClick={() => setModalLoginIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalRegisterIsOpen}
        onRequestClose={() => setModalRegisterIsOpen(false)}
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalRegisterIsOpen(false)}>Exit</button>
        </div>
      </Modal>
      <button onClick={() => setModalLoginIsOpen(true)}>Open Modal 2</button>
      <Modal
        isOpen={modalLoginIsOpen}
        onRequestClose={() => setModalLoginIsOpen(false)}
      >
        <h2>Modal Title 2</h2>
        <p>Modal Body 2</p>
        <div>
          <button onClick={() => setModalLoginIsOpen(false)}>Exit</button>
        </div>
      </Modal>
    </div>
  );
};
