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
    <div className={`col  ${classes.descriptionBody}`}>
      <p>SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className={`${classes.descriptionText}`}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="row">
        <h2 className={`col ${classes.descriptionPrice}`}>$125.00</h2>
        <p className={`col align-self-start ${classes.descriptionSale}`}>50%</p>
      </div>
      <div className={` ${classes.descriptionOldPrice}`}>$250.00</div>
      <div style={{ marginTop: "20px" }}>
        <div
          className={`btn-group btn-group-toggle ${classes.descriptionBtnGroup}`}
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
          className={`btn btn-secondary btn-lg ${classes.descriptionBtnCart}`}
        >
          <img src={iconCart} alt="cart" className={classes.logoBtn} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Description;
