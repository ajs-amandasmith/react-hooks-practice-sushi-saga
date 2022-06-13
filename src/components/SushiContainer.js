import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiData, resetLimit, sushiLimit }) {
  const displaySushi = sushiData.map(sushi => (
    <Sushi key={sushi.id} id={sushi.id} name={sushi.name} image={sushi.img_url} price={sushi.price} />
  ))


  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {displaySushi}
      <MoreButton resetLimit={resetLimit} sushiLimit={sushiLimit} />
    </div>
  );
}

export default SushiContainer;
