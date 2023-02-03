import classes from "./cart.module.css";

const Cart = (props) => {
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
        <div className="d-flex  justify-content-center my-auto">
          <p className="">Your cart is empty.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
