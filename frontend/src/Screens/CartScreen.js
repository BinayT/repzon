import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import addToCart from "../actions/cartActions";

export const CartScreen = (props) => {
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return <div>Cart Screen</div>;
};
