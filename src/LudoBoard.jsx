import { useState } from "react";

function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, Yellow: 0, Green: 0, Red: 0 });

  function UpdateBlue() {
    console.log(moves.blue);
    setMoves((preValue) => {
      return { ...preValue, blue: preValue.blue + 1 };
    });
  }
  function UpdateYellow() {
    console.log(moves.Yellow);
    setMoves((preValue) => {
      return { ...preValue, Yellow: preValue.Yellow + 1 }; // object spread because we want to change the location of object for re-rendering the component...
    });
  }
  function UpdateGreen() {
    console.log(moves.Green);
    setMoves((preValue) => {
      return { ...preValue, Green: preValue.Green + 1 };
    });
  }
  function UpdateRed() {
    console.log(moves.Red);
    setMoves((preValue) => {
      return { ...preValue, Red: preValue.Red + 1 };
    });
  }

  return (
    <>
      <h3>Game Start!</h3>
      <div className="board">
        <p>Blue Moves = {moves.blue} </p>
        <button onClick={UpdateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        <p>Yellow Moves = {moves.Yellow} </p>
        <button
          onClick={UpdateYellow}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>
        <p>Green Moves = {moves.Green} </p>
        <button onClick={UpdateGreen} style={{ backgroundColor: "green" }}>
          +1
        </button>
        <p>Red Moves = {moves.Red}</p>
        <button onClick={UpdateRed} style={{ backgroundColor: "red" }}>
          +1
        </button>
      </div>
    </>
  );
}

export { LudoBoard };
