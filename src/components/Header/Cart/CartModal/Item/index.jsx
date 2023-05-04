import React, { useContext } from "react";
import CartContext from "../../../../../context/Cart-context";

function Item({ name, price, quantity, id }) {
  const { cartState, dispatchCart } = useContext(CartContext);

  const increaseQuantity = () => {
    // console.log(id);
    dispatchCart({ type: "INCREASE_QUANTITY", id });
  };
  const decreaseQuantity = () => {
    // console.log(id);
    dispatchCart({ type: "DECREASE_QUANTITY", id });
  };
  return (
    <li className="flex sm:items-center flex-col sm:flex-row justify-between border-b border-gray-200 py-4 last-of-type:border-none">
      <div>
        <p className="font-bold mb-3">{name}</p>
        <div className="flex justify-between items-center w-32">
          <strong className="text-orange-700">${price}</strong>
          <div className=" border border-gray-400 text-center px-3 py-1  rounded-lg">
            <p className="font-semibold">x{quantity}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={decreaseQuantity}
          className="w-16 px-5 py-1 border-2 rounded-lg font-bold text-xl hover:bg-orange-700 hover:text-white border-orange-700 text-orange-700 transition-all active:scale-95"
        >
          -
        </button>
        <button
          onClick={increaseQuantity}
          className="w-16 px-5 py-1 border-2 rounded-lg font-bold text-xl hover:bg-orange-700 hover:text-white border-orange-700 text-orange-700 transition-all active:scale-95"
        >
          +
        </button>
      </div>
    </li>
  );
}

export default Item;
