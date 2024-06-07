import { useState } from "react";

function LudoBoard() {
  let [arr, setArr] = useState(["hey"]);
  console.log("rendered");

  function UpdateBlue() {
    setArr([...arr, "baby"]);
    console.log(arr);
  }

  return (
    <>
      <h3>Game Start!</h3>
      <p>{arr}</p>
      <div className="board">
        <button onClick={UpdateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
      </div>
    </>
  );
}

export { LudoBoard };
