import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import List from "./components/List";
import Footer from "./components/Footer";

// context
import { CartContextProvider } from "./context/Cart-context";

function App() {
  return (
    <CartContextProvider>
      <div className="bg-gray-500">
        <Header />
        <Hero />
        <List />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
