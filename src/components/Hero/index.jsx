import React, { useState } from "react";

function Hero() {
  const [displayCard, setDisplayCard] = useState(false);
  return (
    <section className="h-[50vh] relative text-white">
      <img
        src="./src/assets/hero-min.jpg"
        alt="food image"
        onLoad={() => {
          setDisplayCard((prevState) => !prevState);
        }}
        className="w-full h-full object-cover clip-path brightness-75"
      />
      {displayCard ? (
        <div className="absolute w-3/4 sm:w-auto flex flex-col gap-4 bottom-32 sm:-bottom-6 left-1/2 bg-gray-700 shadow-lg rounded text-center p-4 transition-all move-up-hero-section -translate-x-1/2">
          <h1 className="text-2xl font-bold">
            Delicious Food, Delivered To You
          </h1>
          <p>
            Choose your favorite meal from our board selection of available
            meals and enjoy a delicious lunch or dinner at home
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      ) : null}
    </section>
  );
}

export default Hero;
