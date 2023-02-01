import { useState } from "react";
import classes from "./description.module.css";
import iconCart from "./icon-cart.svg";

const Description = () => {
  const [amount, setAmount] = useState(1);
  const changeAmount = (type) => {
    const prevAmount = amount;
    switch (type) {
      case "add":
        setAmount(prevAmount + 1);
        break;

      case "substract":
        if (prevAmount > 0) {
          setAmount(prevAmount - 1);
          break;
        } else {
          break;
        }

      default:
        console.log("wrong type in changeAmount function");
    }
  };

  return (
    <div
      className={`col ms-5 text-start d-flex flex-column  ${classes.descriptionBody}`}
    >
      <p className="fw-bold">SNEAKER COMPANY</p>
      <h1 className="fw-bold">Fall Limited Edition Sneakers</h1>
      <p className={`${classes.descriptionText}`}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mt-auto mb-0">
        <div className="row row-cols-auto ">
          <h3 className={`col my-auto fw-bold ${classes.descriptionPrice}`}>
            $125.00
          </h3>
          <p className={` col my-auto fw-bold px-2 ${classes.descriptionSale}`}>
            50%
          </p>
        </div>
        <div
          className={` fw-bold text-decoration-line-through ${classes.descriptionOldPrice}`}
        >
          $250.00
        </div>
        <div className="mt-2">
          <div
            className={`btn-group btn-group-toggle me-3 ${classes.descriptionBtnGroup}`}
            data-toggle="buttons"
          >
            <button className="btn" onClick={() => changeAmount("substract")}>
              -
            </button>
            <button
              className="btn"
              style={{ color: "black", fontSize: "medium" }}
              disabled
            >
              {amount}
            </button>
            <button className="btn" onClick={() => changeAmount("add")}>
              +
            </button>
          </div>
          <button
            type="button"
            className={`btn btn-secondary btn-lg  ${classes.descriptionBtnCart}`}
            disabled={amount === 0}
          >
            <img
              src={iconCart}
              alt="cart"
              height={15}
              className={` my-auto me-2 ${classes.logoBtn}`}
            />
            <span className={` my-auto fs-6 `}>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
