import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="App">
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">repzon</a>
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
              <a href="">Pants</a>
            </li>
            <li>
              <a href="">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <ul className="products">
              <li>
                <div className="product">
                  <img
                    src="/images/d1.jpg"
                    alt="product"
                    className="product-image"
                  />

                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars(10 reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img
                    src="/images/d1.jpg"
                    alt="product"
                    className="product-image"
                  />

                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars(10 reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img
                    src="/images/d1.jpg"
                    alt="product"
                    className="product-image"
                  />

                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars(10 reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img
                    src="/images/d1.jpg"
                    alt="product"
                    className="product-image"
                  />

                  <div className="product-name">
                    <a href="product.html">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars(10 reviews)</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
        <footer className="footer">All Rights Reserved</footer>
      </div>
    </div>
  );
}

export default App;
