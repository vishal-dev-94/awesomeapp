import React from "react";

function Cards(props) {
  console.log(props, "props");

  return (
    <>
      <div className="cards">
        <div className="card">
          <img className="card_image" src={props.imgSrc} alt="" />
          <div className="card_info">
            <span className="card_category">{props.cardCategory}</span>
            <h3 className="card_title">{props.seriesname}</h3>
            <a href={props.hrefLink} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
