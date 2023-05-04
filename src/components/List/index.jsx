import React from "react";
import Item from "./Item";

function List() {
  return (
    <section className="mx-auto bg-white rounded mb-10 mt-20 w-3/4 p-5 move-up">
      <ul className="flex flex-col">
        <Item />
        <Item />
        <Item />
      </ul>
    </section>
  );
}

export default List;
