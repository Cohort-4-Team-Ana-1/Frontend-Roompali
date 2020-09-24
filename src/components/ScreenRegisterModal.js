import React, { useState } from "react";
import Modal from "react-modal";

export const ScreenRegisterModal = () => {
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
        <div className="modal-body">
          <h1>
            Sign UP at Roompali<span> For Free!</span>
          </h1>
          <form>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                required=""
              />
            </div>
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
            <input id="sign_up" type="button" value="Sign Up" />
          </form>
          <button onClick={() => setModalRegisterIsOpen(false)}>Exit</button>
        </div>
      </Modal>
    </div>
  );
};
