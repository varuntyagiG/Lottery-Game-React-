import { useState, useEffect } from "react";

function UseEffect() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let Incrementx = () => {
    setCountx((currValue) => {
      return currValue + 1;
    });
  };
  let Incrementy = () => {
    setCounty((currValue) => {
      return currValue + 1;
    });
  };

  useEffect(
    function printSomething() {
      console.log("this is the side effect");
    },
    [countx, county],
  );

  return (
    <div>
      <h2>Count: {countx}</h2>
      <button onClick={Incrementx}>+1</button>
      <h2>Count: {county}</h2>
      <button onClick={Incrementy}>+1</button>
    </div>
  );
}

export { UseEffect };
