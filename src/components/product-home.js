// Product-home.js
import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, image, category, colortemp } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <span className="category-tag">{category}</span>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="subcategory">{colortemp.join(", ")}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;