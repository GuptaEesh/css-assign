import React from "react";
import "./components.css";
const ChefCard = ({ chefDesc, chefDesg, chefName, selected, chefImg }) => {
  return (
    <article
      style={{
        backgroundColor: selected && "white",
        color: selected ? "black" : "white",
      }}
      className="chef-card p-2"
    >
      <img src={chefImg} alt={chefName} />
      <h1>{chefName}</h1>
      <small>{!selected && chefDesg}</small>
      {selected && <p>{chefDesc}</p>}
    </article>
  );
};

export { ChefCard };
