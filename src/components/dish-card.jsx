import React from "react";

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
        <section
          style={{ borderBottom: "2px solid " }}
          className="flex flex-col items-start space-bw gap-2 pb-1"
        >
          <h1>{dishName}</h1>
          <small>{dishDesc}</small>
        </section>
        <section className="flex space-bw items-center pt-1">
          <button
            style={{
              border: !smallCard ? `1px solid ${textColor}` : null,
              color: textColor,
            }}
            className="card-btn"
          >
            Explore &gt;
          </button>
          <p>{dishRating} Rated</p>
        </section>
      </div>
    </article>
  );
};

export { DishCard };
