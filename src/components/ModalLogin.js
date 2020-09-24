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
        <div className="modal-body">
          <h2>Welcome Again!</h2>
          <form>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required=""
              />
            </div>
            <div>
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Password"
                required=""
              />
            </div>
            <input id="log_in" type="button" value="Log In" />
          </form>
          <button onClick={() => setModalLoginIsOpen(false)}>Exit</button>
        </div>
      </Modal>
    </div>
  );
};