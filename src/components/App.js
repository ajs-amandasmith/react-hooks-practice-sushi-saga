import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiLimit, setSushiLimit] = useState(4);
  const [sushiData, setSushiData] = useState([]);
  const [plates, setPlates] = useState([]);
  const [amount, setAmount] = useState(100);
  
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

  function showPlates(num) {
    setPlates([...plates, num])
  }

  function changeAmount(newAmount) {
    setAmount(newAmount);
  }

  return (
    <div className="app">
      <SushiContainer 
        sushiData={sushiData} 
        resetLimit={resetLimit} 
        sushiLimit={sushiLimit} 
        showPlates={showPlates} 
        amount={amount}
        changeAmount={changeAmount}
      />
      <Table plates={plates} amount={amount} />
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


Bonus:

Sushi Wallet! Add a form for customers to add more money to their balance.

Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!

Anything else!

*/