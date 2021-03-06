import express from "express";
import { data } from "./data";

const app = express();

app.get("/api/products/", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((el) => el._id === productId);
  product
    ? res.send(product)
    : res.status(404).send({ msg: "Product not found" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
