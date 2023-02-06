import { useState } from "react";
import classes from "./cart.module.css";
import img from "./image-product-1.jpg";
import CartItem from "./cartItem/cartItem";

const Cart = (props) => {
  const [empty, setempty] = useState(false);
  const imgData = {
    src: img,
    title: "Fall Limited Edition Sneakers",
    price: 125,
    amount: 3,
  };
  const content = (
    <div className="p-3 px-3 px-sm-5 px-md-3 mx-0 mx-sm-5 mx-md-0 ">
      <CartItem imgData={imgData} />

      <button
        type="button"
        className={`btn btn-danger w-100 mt-3 ${classes.cartButton}`}
      >
        Checkout
      </button>
    </div>
  );
  return (
    <div
      className={` ${classes.cartBody}`}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        props.onClose();
      }}
    >
      <div
        className={`shadow mx-4  bg-white rounded d-flex flex-column  ${classes.cartContent}`}
      >
        <h2 className="text-start border-bottom p-3">Cart</h2>

        {empty ? (
          <p className="justify-content-center my-auto ">Your cart is empty.</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default Cart;
