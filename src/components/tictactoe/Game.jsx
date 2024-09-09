import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import getWinner from "./helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [XTurn, setXTurn] = useState(true);

  const winner = getWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = XTurn ? "X" : "O";
    setBoard(boardCopy);
    setXTurn(!XTurn);
  };
  return (
    <div>
      <div className="winner-noti">{winner ? winner + " won!!!" : ""}</div>
      <Board arr={board} onClick={handleClick}></Board>
      <button
        className="reset-btn"
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
        Reset game
      </button>
    </div>
  );
};

export default Game;
