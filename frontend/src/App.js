import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen.js";
import { ProductScreen } from "./screens/ProductScreen.js";
import { CartScreen } from "./screens/CartScreen.js";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <Link to="/">repzon</Link>
            </div>
            <div className="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>
          <aside className="sidebar">
            <h3>Shopping Catagories</h3>
            <button onClick={closeMenu} className="sidebar-close-button">
              x
            </button>
            <ul>
              <li>
                <a href="#">Pants</a>
              </li>
              <li>
                <a href="#">Shirts</a>
              </li>
            </ul>
          </aside>
          <main className="main">
            <div className="content">
              <Route path="/" component={HomeScreen} exact={true} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/products/:id" component={ProductScreen} />
            </div>
          </main>
          <footer className="footer">All Rights Reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
