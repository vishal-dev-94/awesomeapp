import React from "react";

const greetingDiv = {
  display: "flex",
  backgroundColor: "pink",
  justifyContent: "center",
  alignItems: "center",
  width: "30%",
  height: "70px",
  borderRadius: "5%",
  boxSizing: "border-box",
  boxShadow: "0px 5px ffe9c5",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "0px 35% 10px",
};

let date = new Date();
let greetingTextColor = {};
let greetingText = "";
if (date.getHours() < 12) {
  greetingTextColor = {
    color: "green",
    margin: "0px 20px 20px",
  };
  greetingText = "Good Morning";
} else if (date.getHours() > 12 && date.getHours() < 20) {
  greetingTextColor = {
    color: "orange",
    margin: "0px 20px 20px",
  };
  greetingText = "Good Evening !";
} else if (date.getHours() > 20) {
  greetingTextColor = {
    color: "black",
    margin: "0px 20px 20px",
  };
  greetingText = "Good Night !";
}

function Greeting() {
  return (
    <>
      <div style={greetingDiv}>
        <h1>
          Hello Sir,
          <span style={greetingTextColor}>{`${greetingText}`} </span>
        </h1>
      </div>
    </>
  );
}

export default Greeting;
