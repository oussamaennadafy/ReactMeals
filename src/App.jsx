import React, { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import List from "./components/List";
import Footer from "./components/Footer";

import { CartContextProvider } from "./context/Cart-context";
import { ToasterProvider } from "./context/Toaster-Context";
import Toaster from "./utils/Toaster";

function App() {
  return (
    <ToasterProvider>
      <CartContextProvider>
        <div className="bg-gray-500">
          <Header />
          <Hero />
          <List />
          <Footer />
          <Toaster />
        </div>
      </CartContextProvider>
    </ToasterProvider>
  );
}

export default App;
