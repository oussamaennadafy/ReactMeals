import React from "react";
import Meal from "./Meal";
import meals from "./../../data/meals";

function List() {
  return (
    <section className="mx-auto bg-white rounded mb-10 mt-20 w-3/4 p-5 move-up">
      <ul className="flex flex-col">
        {meals.map(({ name, description, price }) => (
          <Meal
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
