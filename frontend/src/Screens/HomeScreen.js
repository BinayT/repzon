import React, { useState, useEffect } from "react";
import axios from "axios";
/* import { data } from "../data"; */
import { Link } from "react-router-dom";

export const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);

  console.log(setProducts);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  return (
    <div>
      <ul className="products">
        {products.map((product) => (
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
