import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const prevState = JSON.parse(localStorage.getItem("cart")) || state;
      // console.log(prevState);
      const itemAlreadyInCart = prevState.items.filter(
        (item) => item.name === action.item.name
      );
      let items;
      if (itemAlreadyInCart.length) {
        itemAlreadyInCart[0].quantity += action.item.quantity;
        items = [...prevState.items];
      } else {
        items = [...prevState.items, action.item];
      }
      console.log(items);
      const newCartAfterAdd = {
        ...prevState,
        items,
        totalAmount: items.reduce(
          (prev, curr) => prev + curr.price * curr.quantity,
          0
        ),
      };
      localStorage.setItem("cart", JSON.stringify(newCartAfterAdd));
      return newCartAfterAdd;
    case "INCREASE_QUANTITY":
      const itemToIncrease = state.items.find((item) => item.id === action.id);
      itemToIncrease.quantity++;
      const newCartAfterIncreas = {
        ...state,
        totalAmount: state.totalAmount + itemToIncrease.price,
      };
      localStorage.setItem("cart", JSON.stringify(newCartAfterIncreas));
      return newCartAfterIncreas;
    case "DECREASE_QUANTITY":
      const itemToDecrease = state.items.find((item) => item.id === action.id);
      if (itemToDecrease.quantity <= 1) {
        const cartAfterDeleteItem = {
          ...state,
          totalAmount: state.totalAmount - itemToDecrease.price,
          items: state.items.filter((item) => item.id !== action.id),
        };
        localStorage.setItem("cart", JSON.stringify(cartAfterDeleteItem));
        return cartAfterDeleteItem;
      } else {
        itemToDecrease.quantity--;
        const cartAfterDecrease = {
          ...state,
          totalAmount: state.totalAmount - itemToDecrease.price,
        };
        localStorage.setItem("cart", JSON.stringify(cartAfterDecrease));
        return cartAfterDecrease;
      }
  }
};

const initialCart = {
  items: [],
  totalAmount: 0,
  setItems: () => {},
};

const cartInitializer = () => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return initialCart;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    initialCart,
    cartInitializer
  );
  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
