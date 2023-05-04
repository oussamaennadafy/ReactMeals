import React, { useState } from "react";

function Item() {
  const [amount, setAmount] = useState(1);
  const handleChange = (e) => {
    const { value } = e.target;
    if (/[^1-9]/.test(value)) return;
    setAmount(value);
  };
  return (
    <li className="flex sm:items-center flex-col sm:flex-row justify-between border-b border-gray-200 py-4 last-of-type:border-none">
      <div>
        <p className="font-bold mb-3">Suchi</p>
        <div className="flex justify-between items-center w-32">
          <strong className="text-orange-700">$22.99</strong>
          <div className=" border border-gray-400 text-center px-3 py-1  rounded-lg">
            <p className="font-semibold">x2</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button className="w-16 px-5 py-1 border-2 rounded-lg font-bold text-xl hover:bg-orange-700 hover:text-white border-orange-700 text-orange-700 transition-all active:scale-95">
          +
        </button>
        <button className="w-16 px-5 py-1 border-2 rounded-lg font-bold text-xl hover:bg-orange-700 hover:text-white border-orange-700 text-orange-700 transition-all active:scale-95">
          -
        </button>
      </div>
    </li>
  );
}

export default Item;
