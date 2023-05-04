import React, { useState } from "react";
import { createPortal } from "react-dom";
import CartModal from "./../Cart/CartModal";

function Cart() {
  const [displayModal, setDisplayModal] = useState(false);
  const toggleModal = () => {
    setDisplayModal((prevState) => !prevState);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="flex items-center justify-between gap-3 px-7 py-2 bg-orange-900 rounded-full"
      >
        <img
          src="./../../src/assets/cart.png"
          alt="shopping cart image"
          className="w-5"
        />
        <p className="">Your Cart</p>
        <span className="px-4 py-1 rounded-full bg-orange-700">2</span>
      </button>
      {displayModal &&
        createPortal(
          <CartModal toggleModal={toggleModal} />,
          document.getElementById("root")
        )}
    </>
  );
}

export default Cart;
