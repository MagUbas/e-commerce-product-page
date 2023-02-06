import classes from "./modal.module.css";
import iconClose from "./images/icon-close.svg";
import iconNext from "./images/icon-next.svg";
import iconPrev from "./images/icon-previous.svg";

const Modal = (props) => {
  return (
    <div
      className={` ${classes.modalBody}`}
      data-testid="modalImg"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        props.closeModal();
      }}
    >
      <div className={`row ${classes.modalContent}`}>
        <div class="carousel slide mb-5 p-0 ">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={props.activeImg}
                class="d-block w-100 rounded"
                alt={"main " + props.activeImg.match(/product-./gm)[0]}
              />
            </div>
          </div>
          <button
            class={`carousel-control-prev`}
            type="button"
            onClick={props.prevImg}
            style={{ opacity: "1" }}
          >
            <img src={iconPrev} alt="prev" class={` ${classes.modalPrev}`} />
          </button>
          <button
            class="carousel-control-next"
            type="button"
            onClick={props.nextImg}
            style={{ opacity: "1" }}
          >
            <img src={iconNext} alt="next" class={` ${classes.modalNext}`} />
          </button>

          <img
            src={iconClose}
            alt="close"
            class={` ${classes.modalClose}`}
            onClick={props.closeModal}
          />
        </div>
        {props.thumbnail}
      </div>
    </div>
  );
};

export default Modal;
