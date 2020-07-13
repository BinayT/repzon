import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

export const HomeScreen = (props) => {
  return (
    <div>
      <ul className="products">
        {data.products.map((product) => (
          <li>
            <div className="product">
              <Link to={`/products/${product._id}`}>
                <img
                  src={product.image}
                  alt="product"
                  className="product-image"
                />
              </Link>
              <div className="product-name">
                <Link to={`/products/${product._id}`}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating} Stars(10 reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};