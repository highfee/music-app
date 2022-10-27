import React from "react";

const Loading = () => {
  return (
    <div className="h-[150px] w-full grid place-items-center">
      <div className="h-8 w-8 border-white border-[3px] border-t-transparent rounded-full animate-loader"></div>
    </div>
  );
};

export default Loading;
