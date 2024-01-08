import React from "react";

const Heading = ({ text, parg }) => {
  return (
    <div className="flex mt-16 flex-col items-center gap-4">
      <h1 className="bg-black py-2 w-80 text-2xl text-white text-center">
        {text}
      </h1>
      <span className="w-20 h-[3px] bg-black"></span>
      <p className="max-w-[700px] text-gray-600 text-center">{parg}</p>
    </div>
  );
};

export default Heading;
