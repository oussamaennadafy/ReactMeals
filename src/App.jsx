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
        return {
          ...state,
          items: [...state.items, action.item],
          totalAmount: state.items.reduce(
            (prev, curr) => prev.price + curr.price,
            0
          ),
        };
    }
  };
  const initialCart = {
    items: [],
    get totalAmount() {
      return this.items.reduce((prev, curr) => prev.price + curr.price, 0);
    },
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
