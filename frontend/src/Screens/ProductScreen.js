import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

export const ProductScreen = (props) => {
  console.log(props.match.params.id);
  const product = data.products.find((el) => el._id === props.match.params.id);
  const hi = "<<";
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">{hi} Return Back</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating}Stars({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:<div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button-add-to-cart">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
