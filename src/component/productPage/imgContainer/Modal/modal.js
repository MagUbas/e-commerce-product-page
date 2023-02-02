import classes from "./modal.module.css";
import iconClose from "./images/icon-close.svg";
import iconNext from "./images/icon-next.svg";
import iconPrev from "./images/icon-previous.svg";

const Modal = (props) => {
  return (
    <div
      className={classes.modalBody}
      data-testid="modalImg"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        props.closeModal();
      }}
    >
      <div className={classes.modalContent}>
        <img
          src={iconClose}
          alt="close"
          className={classes.modalClose}
          onClick={props.closeModal}
        />
        <img
          src={iconNext}
          alt="next"
          className={classes.modalNext}
          onClick={props.nextImg}
        />
        <img
          src={iconPrev}
          alt="prev"
          className={classes.modalPrev}
          onClick={props.prevImg}
        />
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
