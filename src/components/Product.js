import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";

const Product = ({ id, name, category, price, image }) => {
  return (
    <>
      <NavLink to={`/SingleProduct/${id}`}>
        <div className="f-p-card">
          <div className="top-card">
            <span className="f-p-category">{category}</span>
            <img src={image} className="f-p-image" alt="hg" />
          </div>
          <div className="f-p-desc">
            <h3>{name}</h3>
            <h3>
              <FormatPrice price={price} />
            </h3>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Product;
