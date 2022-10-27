import React from "react";

const Seekbar = ({ min, value, max, onInput }) => {
  // console.log(max);
  return (
    <div className="hidden md:block">
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-[600px] h-1  rounded-lg"
      />
    </div>
  );
};

export default Seekbar;
