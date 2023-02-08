import classes from "./cart.module.css";
import CartItem from "./cartItem/cartItem";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../redux/actions";

const Cart = (props) => {
  const dispatch = useDispatch();
  const handleDeleteFromCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const content = (
    <div className="flex-grow-1   p-3 px-3 px-sm-5 px-md-3 mx-0 mx-sm-5 mx-md-0 ">
      {props.store.items.map((item) => {
        return (
          <CartItem
            key={item.title}
            src={item.src}
            imgData={item}
            onDelete={() => {
              handleDeleteFromCart(item);
            }}
          />
        );
      })}

      <button
        type="button"
        className={`btn w-100 mt-3   ${classes.cartButton}`}
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
        className={`shadow mx-4  bg-white rounded d-flex flex-column    ${classes.cartContent}`}
      >
        <h2 className="text-start border-bottom p-3">Cart</h2>

        {props.store.amount === 0 ? (
          <p className="justify-content-center my-auto py-5 ">
            Your cart is empty.
          </p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default Cart;
