import React from "react";
import ModalWrapper from "./../../../../utils/ModalWrapper";

function CheckoutModal({ toggleModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ModalWrapper toggleModal={toggleModal}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input type="name" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="address">address</label>
          <input type="address" name="address" id="address" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </ModalWrapper>
  );
}

export default CheckoutModal;
