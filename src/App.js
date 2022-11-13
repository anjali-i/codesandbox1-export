import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import "./Loadering";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            background: "black",
            padding: "5px 0 5px 5px",
            fontSize: "20px"
          }}
        >
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white"
              })}
            >
              Home
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white"
              })}
            >
              About
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white"
              })}
            >
              Contact
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/products"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white"
              })}
            >
              Products
            </NavLink>
          </div>
        </div>

        {/* <div>
          <CartProvider>
            <Cart />
            <Home />
          </CartProvider>
        </div> */}
        <Routes>
          {/* <Route exact path="/" element={<Loadering />} />   */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
        <div>
          <CartProvider>
            <Cart />
            <Home />
          </CartProvider>
        </div>
      </BrowserRouter>
    </>
  );
}
