import classes from "./modal.module.css";
import iconClose from "./icon-close.svg";
import iconNext from "./icon-next.svg";
import iconPrev from "./icon-previous.svg";

const Modal = (props) => {
  return (
    <div className={classes.modalBody} data-testid="modalImg">
      <div className={classes.modalContent}>
        <img
          src={iconClose}
          alt="close"
          className={classes.modalClose}
          onClick={props.closeModal}
        />
        <img
          src={iconNext}
          alt="close"
          className={classes.modalNext}
          onClick={props.nextImg}
        />
        <img
          src={iconPrev}
          alt="close"
          className={classes.modalPrev}
          onClick={props.prevImg}
        />
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
