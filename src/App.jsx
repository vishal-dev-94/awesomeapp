import React from "react";
import Heading from "./Heading";
import Greeting from "./Greeting";
import Calculation from "./Calculation";
import ImagesComp from "./ImagesComp";
import Cards from "./Cards";
import Sdata from "./Sdate";

function ncard(val) {
  return (
    <Cards
      key={val.id}
      imgSrc={val.imgSrc}
      cardCategory={val.cardCategory}
      seriesname={val.seriesname}
      hrefLink={val.hrefLink}
    />
  );
}

function App() {
  return (
    <>
      <Heading />
      <Greeting></Greeting>
      <ImagesComp></ImagesComp>
      <Calculation></Calculation>
      <div className="AllCards">{Sdata.map(ncard)}</div>
    </>
  );
}

export default App;
