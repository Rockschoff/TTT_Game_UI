import "./styles.css";
import React from "react";
import Cell from "./Cell";

export default function App() {
  var [turn, setTurn] = React.useState("X");
  var d = [];

  for (var i = 0; i < 3; i++) {
    var ele = [];
    for (var j = 0; j < 3; j++) {
      ele.push(null);
    }
    d.push(ele);
  }
  var [state, setState] = React.useState(d);
  
  //true : X turn to play , O otherwise
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <div className="board">
        {arr.map((ele) => {
          return <Cell index={ele} turn={turn} setTurn={setTurn} state={state} setState={setState} />;
        })}
      </div>
      <h2> {turn}'s turn </h2>
    </div>
  );
}
