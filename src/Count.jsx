import { useState } from "react";

function Count() {
  let [count, setCount] = useState(0);
  console.log("After component rendered");
  console.log(count);

  function Update() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={Update}>Count-Increase</button>
    </div>
  );
}

export { Count };
