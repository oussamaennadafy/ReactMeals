import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  setItems: () => {},
});

export default CartContext;
