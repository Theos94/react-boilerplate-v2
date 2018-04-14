import React from "react";
import { render } from "react-dom";
import "./css/style.css";

const App = () => (
  <div>
    <h1>Simple React Boilerplate!</h1>
  </div>
);

render(<App />, document.querySelector("#main"));
