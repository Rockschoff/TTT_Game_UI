import "./styles.css";
import React from "react";
import Cell from "./Cell";

export default function App() {
  var [turn, setTurn] = React.useState("X");
  //true : X turn to play , O otherwise
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <div className="board">
        {arr.map((ele) => {
          return <Cell index={ele} turn={turn} setTurn={setTurn} />;
        })}
      </div>
      <h2> {turn}'s turn </h2>
    </div>
  );
}
