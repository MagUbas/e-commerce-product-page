import logo from "./logo.svg";
import cart from "./icon-cart.svg";
import avatar from "./image-avatar.png";
import classes from "./navBar.module.css";
import Cart from "../Cart/cart";
import { useState } from "react";

const NavBar = () => {
  const pages = ["Collections", "Men", "Women", "About", "Contact"];
  const [showCart, setShowCart] = useState(false);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light pb-2 mx-5 ${classes.navBarBody}`}
    >
      <a
        className="navbar-brand mt-2 mt-lg-0 d-flex  align-items-center"
        href="#top"
      >
        <img src={logo} height="27" alt="logo" loading="lazy" />
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {pages.map((el) => {
          return (
            <li
              className={`nav-item ${
                window.location.href.includes(el)
                  ? classes.navBarItemCurrent
                  : null
              }`}
              key={el}
            >
              <a className={`nav-link `} href={el}>
                {el}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="nav justify-content-end">
        <li
          className="nav-item  d-flex  align-items-center"
          onClick={() => setShowCart(true)}
        >
          <img
            className={classes.navBarCart}
            src={cart}
            height="18"
            alt="cart"
            loading="lazy"
          />
        </li>
        <li className="nav-item ms-3">
          <img
            className={classes.navBarAvatar}
            src={avatar}
            height="50"
            alt="avatar"
            loading="lazy"
          />
        </li>
      </ul>
      {showCart ? <Cart onClose={() => setShowCart(false)} /> : null}
    </nav>
  );
};

export default NavBar;
