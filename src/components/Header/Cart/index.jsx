import { useState, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import CartModal from "./../Cart/CartModal";
import CheckoutModal from "./CheckoutModal";

import CartContext from "./../../../context/Cart-context";

function Cart() {
  const { cartState } = useContext(CartContext);
  const [displayCartModal, setDisplayCartModal] = useState(false);
  const [displayCheckoutModal, setDisplayCheckoutModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleCartModal = () => {
    setDisplayCartModal((prevState) => !prevState);
  };
  const toggleCheckoutModal = () => {
    setDisplayCheckoutModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (!cartState.items.length) return;
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 800);
    return () => setAnimate(false);
  }, [cartState.items]);
  return (
    <>
      <button
        onClick={toggleCartModal}
        className={`flex items-center justify-between gap-3 px-3 sm:px-7 py-2 bg-orange-900 rounded-full ${
          animate ? "animate-scale" : ""
        }`}
      >
        <img
          src="./assets/cart.png"
          alt="shopping cart image"
          className="w-5"
        />
        <p className="hidden sm:inline-block">Your Cart</p>
        <span className="px-4 py-1 rounded-full bg-orange-700">
          {cartState.items.length}
        </span>
      </button>
      {displayCartModal &&
        createPortal(
          <CartModal
            toggleCartModal={toggleCartModal}
            toggleCheckoutModal={toggleCheckoutModal}
          />,
          document.getElementById("root")
        )}
      {displayCheckoutModal &&
        createPortal(
          <CheckoutModal toggleModal={toggleCheckoutModal} />,
          document.getElementById("root")
        )}
    </>
  );
}

export default Cart;
