import React, { useState, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import CartModal from "./../Cart/CartModal";

import CartContext from "./../../../context/Cart-context";

function Cart() {
  const { cartState } = useContext(CartContext);
  const [displayModal, setDisplayModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleModal = () => {
    setDisplayModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (!cartState.items.length) return;
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 800);
  }, [cartState.items.length]);
  return (
    <>
      <button
        onClick={toggleModal}
        className={`flex items-center justify-between gap-3 px-7 py-2 bg-orange-900 rounded-full ${
          animate ? "animate-scale" : ""
        }`}
      >
        <img
          src="./../../src/assets/cart.png"
          alt="shopping cart image"
          className="w-5"
        />
        <p className="">Your Cart</p>
        <span className="px-4 py-1 rounded-full bg-orange-700">
          {cartState.items.length}
        </span>
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
