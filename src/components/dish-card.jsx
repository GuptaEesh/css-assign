import React from "react";
import "./components.css";

const DishCard = ({
  bgColor,
  textColor,
  smallCard,
  dishName,
  dishImg,
  dishDesc,
  dishRating,
}) => {
  return (
    <article
      style={{
        backgroundImage: `url(
          ${dishImg}
        )`,
      }}
      className="dish"
    >
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className="flex flex-col w-full h-3 p-1"
      >
        <section className="first-section flex flex-col items-start space-around">
          <h1>{dishName}</h1>
          <small className="justify">{dishDesc}</small>
        </section>
        <section className="flex space-bw items-center second-section">
          <button
            style={{
              border: !smallCard ? `1px solid ${textColor}` : "none",
              padding: !smallCard ? "10px 40px 10px 40px" : "5px",
              color: textColor,
            }}
            className="card-btn"
          >
            Explore &gt;
          </button>
          <small>{dishRating} Rated</small>
        </section>
      </div>
    </article>
  );
};

export { DishCard };
