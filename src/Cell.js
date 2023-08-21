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
    setShow(true);
    if (value == "X") {
      props.setTurn("O");
    } else {
      props.setTurn("X");
    }
  }

  return (
    <div
      className="cell"
      id={props.index}
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
      onClick={HandleClick}
    >
      <p>{show ? value : null}</p>
    </div>
  );
}
