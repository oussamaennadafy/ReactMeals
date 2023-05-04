import React, { useReducer } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import List from "./components/List";

// context
import CartContext from "./context/Cart-context";

function App() {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const items = [...state.items, action.item];
        return {
          ...state,
          items,
          totalAmount:
            items.reduce((prev, curr) => prev + curr.price, 0) *
            action.item.quantity,
        };
      case "INCREASE_QUANTITY":
        const itemToIncrease = state.items.find(
          (item) => item.id === action.id
        );
        itemToIncrease.quantity++;
        return { ...state };
      case "DECREASE_QUANTITY":
        const itemToDecrease = state.items.find(
          (item) => item.id === action.id
        );
        if (itemToDecrease.quantity === 1)
          return {
            ...state,
            items: state.items.filter((item) => item.id !== action.id),
          };
        else itemToDecrease.quantity--;
        return {
          ...state,
        };
    }
  };
  const initialCart = {
    items: [],
    totalAmount: 0,
    setItems: () => {},
  };
  const cartInitializer = () => {
    const cart = localStorage.getItem("cart");
    return cart || initialCart;
  };
  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    initialCart,
    cartInitializer
  );
  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      <div className="bg-gray-500 pb-20">
        <Header />
        <Hero />
        <List />
      </div>
    </CartContext.Provider>
  );
}

export default App;
