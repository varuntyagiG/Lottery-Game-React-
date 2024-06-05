import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";

function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  function gennerator() {
    setTicket(genTicket(3));
  }

  return (
    <div>
      <h1>Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        <br />
        <br />
        <button onClick={gennerator}>buy ticket</button>
        <h2 style={{ color: "yellowgreen" }}>
          {isWinning && "Congratulations ! you won the game"}
        </h2>
      </div>
    </div>
  );
}

export { Lottery };
