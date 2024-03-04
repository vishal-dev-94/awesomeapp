import React from "react";

const fName = "Vishal";
const lName = "lohemor";
const toDayDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const heading = {
  color: "#c5555591",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  fontFamily: "Josefin Slab, serif",
  backgroundColor: "white",
};
function Heading() {
  return (
    <>
      <h1 style={heading}>{`My name is ${fName} ${lName}`}</h1>
      <h1 style={heading}>List Of Top-5 Netflix series in 2020</h1>
      <h2 style={heading}>
        {`Today date is : ${toDayDate} , Current time is : ${currTime} `}
      </h2>
    </>
  );
}
export default Heading;
