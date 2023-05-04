import React from "react";

function Item() {
  return (
    <li className="flex items-center justify-between border-b border-gray-200 py-4 last-of-type:border-none">
      <div>
        <p className="font-bold">Suchi</p>
        <em className="block">fis and veggis</em>
        <strong className="text-orange-700">$22.99</strong>
      </div>
      <div>
        <p className="inline-block mr-2 font-bold">Amount</p>
        <input
          className="border border-gray-300 w-14 rounded px-1"
          type="number"
          value="1"
          name=""
        />
        <button className="block ml-auto px-5 py-[2px] text-white bg-orange-800 rounded-full mt-2">
          + Add
        </button>
      </div>
    </li>
  );
}

export default Item;
