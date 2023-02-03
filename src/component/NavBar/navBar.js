import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import menu from "./images/icon-menu.svg";
import classes from "./navBar.module.css";
import Cart from "./Cart/cart";
import { useState } from "react";

const NavBar = () => {
  const pages = ["Collections", "Men", "Women", "About", "Contact"];
  const [showCart, setShowCart] = useState(false);
  return (
    <div class={`container  p-md-3 border-bottom ${classes.navBarBody}`}>
      <nav className={`navbar navbar-expand-md  pb-2  `}>
        <a
          className="navbar-toggler  d-md-none"
          data-bs-toggle="collapse"
          href="#navbarMenuContent"
          role="button"
          aria-expanded="false"
          aria-controls="navbarMenuContent"
        >
          <img src={menu} height="27" alt="logo" loading="lazy" />
        </a>
        <a className="navbar-brand   align-items-center  d-flex  " href="#top">
          <img src={logo} height="20" alt="logo" loading="lazy" />
        </a>
        <ul
          className="navbar-nav collapse  me-auto mb-2 mb-lg-0"
          id="navbarMenuContent"
        >
          {pages.map((el) => {
            return (
              <li
                className={`nav-item   ${
                  window.location.href.includes(el)
                    ? classes.navBarItemCurrent
                    : null
                }`}
                key={el}
              >
                <a className={`nav-link  `} href={el}>
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
