import deleteImg from "../icon-delete.svg";

const CartItem = (props) => {
  return (
    <div className="d-flex justify-content-between mt-2">
      <img
        src={props.src}
        alt="product"
        className="rounded  my-auto "
        style={{ width: "60px", height: "60px" }}
      />
      <div className="my-auto text-start mx-2" style={{ color: "grey" }}>
        <p className=" my-auto  ">{props.imgData.title}</p>
        <p className="my-auto ">
          ${props.imgData.price} x {props.imgData.amount}
          <span className="fw-bold ms-2" style={{ color: "black" }}>
            ${props.imgData.price * props.imgData.amount}
          </span>
        </p>
      </div>

      <img
        src={deleteImg}
        style={{ width: "20px", height: "20px" }}
        alt="delete"
        className="  my-auto"
        onClick={props.onDelete}
      />
    </div>
  );
};

export default CartItem;
