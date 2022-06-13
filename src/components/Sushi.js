import React, { useState } from "react";

function Sushi({ id, name, image, price, showPlates, amount, changeAmount }) {
  const [isEaten, setIsEaten] = useState(false);

  function handleClick() {
    setIsEaten(true);
    showPlates(1);
    const newAmount = amount - price;
    changeAmount(newAmount)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={(amount >= price) ? handleClick : null}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
