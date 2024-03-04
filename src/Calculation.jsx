import React from "react";
import { sum, sub, mult, division } from "./Calc";

const calcCss = {
  width: "30%",
  borderRadius: "2%",
  boxSizing: "border-box",
  boxShadow: "0px 5px ffe9c5",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "0px 32% 10px",
  color: "grey",
  fontSize: "25px",
};

function Calculation() {
  return (
    <div className="calCulDiv" style={calcCss}>
      <ol>
        <li>The Sum of two numbers is : {sum(2, 4)}</li>
        <li>The Subtraction of two numbers is{sub(2, 4)}</li>
        <li>The multilication of two numbers{mult(2, 5)}</li>
        <li>The Division of two numbers{division(2, 5)}</li>
      </ol>
    </div>
  );
}
export default Calculation;
