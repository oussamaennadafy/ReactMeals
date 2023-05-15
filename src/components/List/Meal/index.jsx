import { useState, useContext } from "react";
import CartContext from "../../../context/Cart-context";
import toasterContext from "../../../context/Toaster-Context";

function Meal({ name, description, price }) {
  const [quantity, setQuantity] = useState(1);
  const [validQuantity, setValidQuantity] = useState(true);
  const cartContext = useContext(CartContext);
  const { dispatchToaster } = useContext(toasterContext);

  const addToCart = (e) => {
    e.preventDefault();
    if (/[^1-9]/.test(quantity) || !quantity) {
      dispatchToaster({
        type: "SHOW",
        status: "fail",
        message: "invalid quantity",
      });
      return setValidQuantity(false);
    }

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
    dispatchToaster({
      type: "SHOW",
      status: "success",
      message: "item added to cart",
    });
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
          <label
            htmlFor="quantity"
            className="inline-block mr-2 font-bold ml-auto flex-1 text-end"
          >
            Quantity
          </label>
          <input
            className={`border ${
              validQuantity
                ? "border-gray-300 outline-gray-300"
                : "border-red-300 outline-red-300"
            } w-14 rounded px-1 ml-auto`}
            type="number"
            value={quantity}
            name="quantity"
            onChange={(e) => setQuantity(e.target.valueAsNumber)}
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

export default Meal;
