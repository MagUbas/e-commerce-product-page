import classes from "./modal.module.css";
import iconClose from "./images/icon-close.svg";
import iconNext from "./images/icon-next.svg";
import iconPrev from "./images/icon-previous.svg";

const Modal = (props) => {
  return (
    <div
      className={`d-none d-md-flex justify-content-center align-items-center ${classes.modalBody}`}
      data-testid="modalImg"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        props.closeModal();
      }}
    >
      <div className={`row ${classes.modalContent}`}>
        <div className="carousel slide p-0 ">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={props.activeImg}
                className="d-block w-100 rounded"
                alt={"main " + props.activeImg.match(/product-./gm)[0]}
              />
            </div>
          </div>
          <button
            className={`carousel-control-prev`}
            type="button"
            onClick={props.prevImg}
            style={{ opacity: "1" }}
          >
            <img
              src={iconPrev}
              alt="prev"
              className={` ${classes.modalPrev}`}
            />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={props.nextImg}
            style={{ opacity: "1" }}
          >
            <img
              src={iconNext}
              alt="next"
              className={` ${classes.modalNext}`}
            />
          </button>

          <img
            src={iconClose}
            alt="close"
            className={` ${classes.modalClose}`}
            onClick={props.closeModal}
          />
        </div>
        <div
          className={`row d-md-flex d-none mx-auto p-0 ${classes.imgRow}`}
          style={{ marginTop: "20px" }}
        >
          {props.thumbnail}
        </div>
      </div>
    </div>
  );
};

export default Modal;
