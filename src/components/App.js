import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiLimit, setSushiLimit] = useState(4);
  const [sushiData, setSushiData] = useState([]);
  
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushis => {
        let limit = sushis.filter(sushi => sushi.id >= (sushiLimit - 3) && sushi.id <= sushiLimit)
          .slice(0, 4)
        setSushiData(limit)
      })
  }, 
    [sushiLimit]
  )

  function resetLimit(newLimit) {
    setSushiLimit(newLimit);
  }

  return (
    <div className="app">
      <SushiContainer sushiData={sushiData} resetLimit={resetLimit} sushiLimit={sushiLimit} />
      <Table />
    </div>
  );
}

export default App;

/*
App
  |__SushiContainer
        |__Sushi
        |__MoreButton
  |__Table


Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.

We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component.

No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.

Bonus:

Sushi Wallet! Add a form for customers to add more money to their balance.

Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!

Anything else!

*/