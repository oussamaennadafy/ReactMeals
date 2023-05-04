import React, { useEffect, useContext } from "react";
import Item from "./Item";
import CartContext from "../../../../context/Cart-context";

function CartModal({ toggleModal }) {
  const { cartState, dispatchCart } = useContext(CartContext);
  return (
    <>
      <div
        onClick={toggleModal}
        className="w-screen h-screen fixed top-0 left-0 bg-black opacity-50 z-10"
      />
      <section className="w-1/2 h-1/2 bg-white fixed top-1/2 left-1/2 p-5 -translate-x-1/2 -translate-y-1/2 rounded-md move-up-modal z-20">
        <ul className="flex flex-col">
          {cartState.items.map(({ name, price, quantity, addedAt }) => (
            <Item key={addedAt} name={name} price={price} quantity={quantity} />
          ))}
        </ul>
        <div className="flex justify-between items-center font-bold text-2xl py-1">
          <p>total amount</p>
          <span>$300</span>
        </div>
        <div className="flex justify-end items-center gap-3 mt-2">
          <button
            onClick={toggleModal}
            className="px-6 py-2 rounded-full border border-orange-700 text-orange-700 bg-white active:scale-[0.98] transition-all "
          >
            Close
          </button>
          <button className="px-6 py-2 rounded-full border border-orange-700 bg-orange-700 active:scale-[0.98] transition-all text-white">
            Place Order
          </button>
        </div>
      </section>
    </>
  );
}

export default CartModal;
