import React from "react";

const Category = ({ categoryName, categoryDesc }) => {
  return (
    <div className="flex items-start flex-col gap-1">
      <h1>{categoryName}</h1>
      <small className="justify">{categoryDesc}</small>
    </div>
  );
};

export { Category };
