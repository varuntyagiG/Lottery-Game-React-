import { useEffect, useState } from "react";

function UseEffectAlert() {
  let [count, setCount] = useState(0);

  let IncreCount = () => {
    setCount((currValue) => {
      return currValue + 1;
    });
  };

  useEffect(function Alert() {
    alert("your age should be greater than 18 years");
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={IncreCount}>+1</button>
    </div>
  );
}

export { UseEffectAlert };
