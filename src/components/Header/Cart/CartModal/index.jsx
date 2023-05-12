import React, { useContext } from "react";
import Item from "./Order";
import CartContext from "./../../../../context/Cart-context";
import ModalWrapper from "./../../../../utils/ModalWrapper";

function CartModal({ toggleCartModal, toggleCheckoutModal }) {
  const { cartState } = useContext(CartContext);
  const PlaceOrder = () => {
    toggleCartModal();
    toggleCheckoutModal();
  };
  return (
    <ModalWrapper toggleModal={toggleCartModal}>
      <ul className="flex flex-col overflow-auto flex-1">
        {cartState.items.length ? (
          cartState.items.map(({ name, price, quantity, id, addedAt }) => (
            <Item
              key={id}
              id={id}
              addedAt={addedAt}
              name={name}
              price={price}
              quantity={quantity}
            />
          ))
        ) : (
          <p className="text-center text-xl font-bold mt-4">
            your cart is empty
          </p>
        )}
      </ul>
      <div className="flex justify-between items-center font-bold text-2xl py-1">
        <p>total amount</p>
        <span>${cartState.totalAmount}</span>
      </div>
      <div className="flex justify-end items-center gap-3 mt-2">
        <button
          onClick={toggleCartModal}
          className="px-6 py-2 rounded-full border border-orange-700 text-orange-700 bg-white active:scale-[0.98] transition-all "
        >
          Close
        </button>
        {cartState.items.length ? (
          <button
            onClick={PlaceOrder}
            className="px-6 py-2 rounded-full border border-orange-700 bg-orange-700 active:scale-[0.98] transition-all text-white"
          >
            Place Order
          </button>
        ) : null}
      </div>
    </ModalWrapper>
  );
}

export default CartModal;
