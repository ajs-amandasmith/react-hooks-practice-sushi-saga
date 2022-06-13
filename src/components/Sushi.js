import React, { useState } from "react";

function Sushi({ id, name, image, price }) {
  const [isEaten, setIsEaten] = useState(false);

  function handleClick() {
    setIsEaten(true);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
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
