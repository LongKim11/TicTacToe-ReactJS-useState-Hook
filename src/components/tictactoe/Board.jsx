import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.arr.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item == "X" ? "x-symbol" : item == "O" ? "o-symbol" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
