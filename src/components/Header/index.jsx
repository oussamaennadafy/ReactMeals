import React from "react";
import Cart from "./Cart";

function Header() {
  return (
    <header className="bg-orange-800 flex justify-between items-center flex-wrap gap-2  px-8 py-4 text-white sticky top-0 z-10">
      <strong className="text-2xl sm:text-4xl">ReactMeals</strong>
      <Cart />
    </header>
  );
}

export default Header;
