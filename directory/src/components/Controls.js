import React from "react";

export default function Conrols(props) {
  console.log("controls ", props.totalIndex, props.currentIndex + 1);

  let stopDecrement = props.currentIndex === 0 ? true : null;
  let stopIncrement = props.currentIndex + 1 === props.totalIndex ? true : null;

  return (
    <div className="controls">
      <button onClick={props.decrement} disabled={stopDecrement}>{"< "}Previous</button>
      <div className="controls-center">
        <button className="center-button">Edit</button>
        <button className="center-button">Delete</button>
        <button className="center-button">New</button>
      </div>
      <button onClick={props.increment} disabled={stopIncrement}>Next{" >"}</button>
    </div>
  );
}
