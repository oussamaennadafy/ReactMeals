import { useEffect, useState } from "react";
import Meal from "./Meal";
// import meals from "./../../data/meals";

function List() {
  const [meals, setMeals] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoader(true);
    fetch("http://172.16.8.84:8000/api/v1/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data.body.meals))
      .catch((err) => setError(err.message))
      .finally(() => setLoader(false));
  }, []);
  return (
    <section className="mx-auto bg-white rounded mb-10 mt-20 w-3/4 p-5 min-h-[300px] flex justify-center items-center move-up">
      {!loader && !error && meals.length ? (
        <ul className="flex flex-col w-full">
          {meals.map(({ name, description, price }) => (
            <Meal
              key={name}
              name={name}
              description={description}
              price={price}
            />
          ))}
        </ul>
      ) : null}
      {loader ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
    </section>
  );
}

export default List;
