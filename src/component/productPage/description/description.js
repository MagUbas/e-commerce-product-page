import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions";

import classes from "./description.module.css";
import iconCart from "./icon-cart.svg";

const Description = (props) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

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
      className={`col ms-0 ms-md-3 ms-lg-5 mb-3   text-start d-flex flex-column  ${classes.descriptionBody}`}
    >
      <p className="fw-bold">{props.item.company}</p>
      <h1 className="fw-bold">{props.item.title}</h1>
      <p className={`${classes.descriptionText}`}>{props.item.description}</p>
      <div className=" mt-auto mb-0">
        <div className="d-flex flex-md-column justify-content-start mb-3 ">
          <div className={` my-auto  `}>
            <span className={` h3 fw-bold me-2 ${classes.descriptionPrice}`}>
              ${props.item.price.toFixed(2)}
            </span>
            <span className={`h5  px-2 ${classes.descriptionSale}`}>
              {(props.item.price / props.item.oldPrice) * 100}%
            </span>
          </div>
          <p
            className={`fw-bold text-decoration-line-through  ms-md-0 ms-auto my-auto  ${classes.descriptionOldPrice}`}
          >
            ${props.item.oldPrice.toFixed(2)}
          </p>
        </div>

        <div className="d-flex flex-column  flex-md-row mt-2">
          <div
            className={` btn-group btn-group-toggle me-md-3 ${classes.descriptionBtnGroup}`}
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
            className={`btn btn-secondary btn-lg mt-2 mt-md-0  ${classes.descriptionBtnCart}`}
            disabled={amount === 0}
            onClick={() =>
              dispatch(
                addToCart({
                  title: props.item.title,
                  price: props.item.price,
                  src: props.item.imgSrc[0],
                  amount: amount,
                })
              )
            }
          >
            <img
              src={iconCart}
              alt="cart"
              height={15}
              className={` my-auto me-2 ${classes.logoBtn}`}
            />
            <span className={`fs-6 my-auto  `}>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
