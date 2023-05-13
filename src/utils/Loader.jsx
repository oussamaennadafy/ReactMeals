import React from "react";

function loader() {
  return (
    <div className="flex justify-center items-center gap-2 w-full">
      <div className="rounded-full bg-white w-2 h-2 animate-pulseEarly" />
      <div className="rounded-full bg-white w-2 h-2 animate-pulse" />
      <div className="rounded-full bg-white w-2 h-2 animate-pulseLate" />
    </div>
  );
}

export default loader;
