import { useState } from "react";
import iconNext from "./images/icon-next.svg";
import iconPrev from "./images/icon-previous.svg";

import classes from "./imgContainer.module.css";
import Modal from "./Modal/modal";

const ImgContainer = (props) => {
  const [activeImg, setActiveImg] = useState(props.imgSet[0]);
  const [showModal, setShowModal] = useState(false);

  const thumbnail = props.imgSet.map((img) => {
    return (
      <div className="col" key={img.match(/product-./gm)[0]}>
        <img
          src={img}
          className={`rounded img-fluid ${
            img === activeImg ? classes.imgActive : null
          }`}
          alt={"thumbnail " + img.match(/product-./gm)[0]}
          onClick={() => setActiveImg(img)}
        />
      </div>
    );
  });
  const handleNextImg = () => {
    const indexActive = props.imgSet.indexOf(activeImg);
    const newIndex =
      props.imgSet.length === indexActive + 1 ? 0 : indexActive + 1;
    setActiveImg(props.imgSet[newIndex]);
  };
  const handlePrevImg = () => {
    const indexActive = props.imgSet.indexOf(activeImg);
    const newIndex =
      indexActive === 0 ? props.imgSet.length - 1 : indexActive - 1;
    setActiveImg(props.imgSet[newIndex]);
  };

  return (
    <div className=" row col-md  mx-auto mb-3">
      <img
        src={activeImg}
        className={`d-none d-md-flex rounded img-fluid p-0 `}
        alt={"main " + activeImg.match(/product-./gm)[0]}
        onClick={() => setShowModal(true)}
      />
      <div className=" d-flex d-md-none carousel slide p-0 ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={activeImg}
              className={` rounded img-fluid p-0 `}
              alt={"main " + activeImg.match(/product-./gm)[0]}
            />
          </div>
        </div>
        <button
          className={`carousel-control-prev ps-3 ps-sm-0`}
          type="button"
          onClick={handlePrevImg}
          style={{ opacity: "1" }}
        >
          <img
            src={iconPrev}
            alt="prev"
            className={` ${classes.prevImgIcon}`}
          />
        </button>
        <button
          className="carousel-control-next pe-3 pe-sm-0"
          type="button"
          onClick={handleNextImg}
          style={{ opacity: "1" }}
        >
          <img
            src={iconNext}
            alt="next"
            className={` ${classes.nextImgIcon}`}
          />
        </button>
      </div>
      <div
        className={`row d-md-flex d-none mx-auto p-0 ${classes.imgRow}`}
        style={{ marginTop: "20px" }}
      >
        {thumbnail}
      </div>
      {showModal ? (
        <Modal
          activeImg={activeImg}
          thumbnail={thumbnail}
          closeModal={() => setShowModal(false)}
          nextImg={handleNextImg}
          prevImg={handlePrevImg}
        />
      ) : null}
    </div>
  );
};

export default ImgContainer;
