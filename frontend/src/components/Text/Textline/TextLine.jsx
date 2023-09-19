import React from "react";
const TextLine = ({ text, size, colour }) => {
  return (
    <div className={`text-center text-${size} ${colour}  bg-blue-200 py-5`}>
      {text}
    </div>
  );
};

export default TextLine;
