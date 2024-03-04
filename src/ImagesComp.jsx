import React from "react";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const uidaiLink = "https://uidai.gov.in/";

function imagesFunc() {
  return (
    <>
      <div className="img_div">
        <img src={img1} alt="randomImages" />
        <img src={img2} alt="randomImages" />
        <a href={uidaiLink} target="_blank" rel="noreferrer">
          <img src={img3} alt="randomImages" />
        </a>
      </div>
    </>
  );
}

export default imagesFunc;
