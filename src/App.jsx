import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import List from "./components/List";

function App() {
  return (
    <div className="bg-gray-500 pb-20">
      <Header />
      <Hero />
      <List />
    </div>
  );
}

export default App;
