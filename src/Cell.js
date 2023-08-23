import React from "react";
import "./styles.css";

export default function Cell(props) {
  var [show, setShow] = React.useState(false);
  var [clicked, setClicked] = React.useState(false);
  const value = props.turn;
  function HandleMouseEnter(event) {
    if (!clicked) {
      setShow(!show);
    }
  }
  function HandleMouseLeave(event) {
    if (!clicked) {
      setShow(!show);
    }
  }
  function HandleClick(event) {
    setClicked(true);
    var s = props.state.slice();
    var c = GetCoordinates(props.index);
    console.log(s);
    s[c[0]][c[1]] = props.turn;
    setState(s);
    console.log(props.state);
    if (value == "X") {
      props.setTurn("O");
    } else {
      props.setTurn("X");
    }
  }

  function GetCoordinates(key) {
    var m = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ];
    return m[key - 1];
  }

  return (
    <div
      className="cell"
      id={props.index}
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
      onClick={HandleClick}
    >
      <p>{clicked ? value : show ? value : null}</p>
    </div>
  );
}
