import React from "react";
import Item from "./Item";
import items from "./../../data/items";

function List() {
  return (
    <section className="mx-auto bg-white rounded mb-10 mt-20 w-3/4 p-5 move-up">
      <ul className="flex flex-col">
        {items.map(({ name, description, price }) => (
          <Item
            key={name}
            name={name}
            description={description}
            price={price}
          />
        ))}
      </ul>
    </section>
  );
}

export default List;
