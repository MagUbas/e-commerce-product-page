import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import iconClose from "./images/icon-close.svg";
import menu from "./images/icon-menu.svg";
import classes from "./navBar.module.css";
import Cart from "./Cart/cart";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const pages = ["Collections", "Men", "Women", "About", "Contact"];
  const store = useSelector((state) => state);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    });
  });

  return (
    <div
      className={`container  p-md-3 border-bottom position-relative ${classes.navBarBody}`}
    >
      <nav className={`navbar navbar-expand-md   pb-2  `}>
        <ul className="nav justify-content-end">
          <li
            className="  d-flex  align-items-center"
            onClick={() => {
              setShowMenu((prevState) => !prevState);
            }}
          >
            <img
              src={menu}
              height="20"
              alt="menu"
              className="d-flex d-md-none me-3"
            />
          </li>
          <li className="  d-flex   align-items-center me-3">
            <img src={logo} height="20" alt="logo" loading="lazy" />
          </li>
        </ul>
        <ul
          className={`navbar-nav border-end  ps-1 d-md-none ${
            showMenu ? "d-flex" : "d-none"
          } ${classes.navBarMenu}`}
        >
          <img
            src={iconClose}
            alt="close"
            className={`  mb-3 ${classes.imgClose}`}
            onClick={() => setShowMenu(false)}
          />
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

        <ul className={`navbar-nav d-none d-md-flex  me-auto mb-2 mb-lg-0  `}>
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
            <span className={classes.cartAmount}>{store.amount}</span>
          </li>
          <li className="nav-item ms-1">
            <img
              className={classes.navBarAvatar}
              src={avatar}
              height="50"
              alt="avatar"
              loading="lazy"
            />
          </li>
        </ul>
        {showCart ? (
          <Cart store={store} onClose={() => setShowCart(false)} />
        ) : null}
      </nav>
    </div>
  );
};

export default NavBar;
