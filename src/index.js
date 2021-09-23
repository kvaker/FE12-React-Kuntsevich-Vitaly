import React from "react";
import ReactDOM from "react-dom";
import CardHolder from "./Components/App/CardHolder/CardHolder";
import './Components/styles/style.css'
export const CONSTANTS = {
   DELETE_CARD: "DELETE_CARD"
};

ReactDOM.render(<CardHolder/>, document.getElementById("root"));
