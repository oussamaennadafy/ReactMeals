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
        <div className="absolute -bottom-6 left-1/2 bg-gray-700 shadow-lg rounded text-center p-4 transition-all move-up -translate-x-1/2">
          <h1 className="text-2xl font-bold mb-3">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p>
            Excepturi explicabo veniam in? Omnis ut aliquid officiis
            necessitatibus iusto soluta
          </p>
          <p>
            quibusdam aperiam voluptatem atque molestias, vel ab dicta nostrum
            repellendus perspiciatis?
          </p>
        </div>
      ) : null}
    </section>
  );
}

export default Hero;
