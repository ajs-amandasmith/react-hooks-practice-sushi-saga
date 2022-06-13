import React from "react";

function MoreButton({ resetLimit, sushiLimit }) {
  function handleClick() {
    const newLimit = sushiLimit + 4;
    resetLimit(newLimit);
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
