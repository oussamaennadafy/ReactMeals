import React from "react";
import CartModal from "./CartModal";

function Header() {
  return (
    <header className="bg-orange-800 flex justify-between items-center flex-wrap gap-2  px-8 py-4 text-white">
      <strong className="text-2xl sm:text-4xl">ReactMeals</strong>
      <button className="flex items-center justify-between gap-3 px-7 py-2 bg-orange-900 rounded-full">
        <img
          src="./../../src/assets/cart.png"
          alt="shopping cart image"
          className="w-5"
        />
        <p className="">Your Cart</p>
        <span className="px-4 py-1 rounded-full bg-orange-700">2</span>
      </button>
    </header>
  );
}

export default Header;
