import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return <div>Hello {props.name}</div>;
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App name="Zahoor" />, appDiv);
