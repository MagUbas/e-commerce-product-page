import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import classes from "./navBar.module.css";
import Cart from "./Cart/cart";
import { useState } from "react";

const NavBar = () => {
  const pages = ["Collections", "Men", "Women", "About", "Contact"];
  const [showCart, setShowCart] = useState(false);
  return (
    <div class={`container  p-3 border-bottom ${classes.navBarBody}`}>
      <nav className={`navbar navbar-expand-md  pb-2  `}>
        <a className="navbar-brand  d-flex  align-items-center" href="#top">
          <img src={logo} height="27" alt="logo" loading="lazy" />
        </a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
    </div>
  );
};

export default NavBar;
