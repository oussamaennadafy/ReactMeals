import React, { useState, useContext } from "react";
import CartContext from "../../../context/Cart-context";

function Item({ name, description, price }) {
  const [quantity, setQuantity] = useState(1);
  const [validQuantity, setValidQuantity] = useState(true);
  const cartContext = useContext(CartContext);

  const addToCart = (e) => {
    e.preventDefault();
    if (/[^1-9]/.test(quantity) || !quantity) return setValidQuantity(false);

    const item = {
      name,
      description,
      price,
      quantity,
      addedAt: new Date(),
      id: Date.now(),
    };
    cartContext.dispatchCart({ type: "ADD_TO_CART", item });
    setQuantity(1);
    setValidQuantity(true);
  };
  return (
    <li className="flex sm:items-center flex-col sm:flex-row justify-between border-b border-gray-200 py-4 last-of-type:border-none">
      <div>
        <p className="font-bold">{name}</p>
        <em className="block">{description}</em>
        <strong className="text-orange-700">${price}</strong>
      </div>
      <form onSubmit={addToCart}>
        <div className="flex justify-end">
          <p className="inline-block mr-2 font-bold ml-auto flex-1 text-end">
            Quantity
          </p>
          <input
            className={`border ${
              validQuantity
                ? "border-gray-300 outline-gray-300"
                : "border-red-300 outline-red-300"
            } w-14 rounded px-1 ml-auto`}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="block ml-auto px-5 py-[2px] text-white bg-orange-800 rounded-full mt-2"
        >
          + Add
        </button>
      </form>
    </li>
  );
}

export default Item;
