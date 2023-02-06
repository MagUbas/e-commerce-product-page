import { useState } from "react";
import imageProduct1 from "./images/image-product-1.jpg";
import imageProduct2 from "./images/image-product-2.jpg";
import imageProduct3 from "./images/image-product-3.jpg";
import imageProduct4 from "./images/image-product-4.jpg";
import iconNext from "./images/icon-next.svg";
import iconPrev from "./images/icon-previous.svg";

import classes from "./imgContainer.module.css";
import Modal from "./Modal/modal";

const ImgContainer = () => {
  const [activeImg, setActiveImg] = useState(imageProduct1);
  const [showModal, setShowModal] = useState(false);
  const imgSet = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
  const thumbnail = imgSet.map((img) => {
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
    const indexActive = imgSet.indexOf(activeImg);
    const newIndex = imgSet.length === indexActive + 1 ? 0 : indexActive + 1;
    setActiveImg(imgSet[newIndex]);
  };
  const handlePrevImg = () => {
    const indexActive = imgSet.indexOf(activeImg);
    const newIndex = indexActive === 0 ? imgSet.length - 1 : indexActive - 1;
    setActiveImg(imgSet[newIndex]);
  };

  return (
    <div className=" row col-md  mx-auto mb-3">
      <img
        src={activeImg}
        className={`d-none d-md-flex rounded img-fluid p-0 `}
        alt={"main " + activeImg.match(/product-./gm)[0]}
        onClick={() => setShowModal(true)}
      />
      <div class=" d-flex d-md-none carousel slide p-0 ">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={activeImg}
              className={` rounded img-fluid p-0 `}
              alt={"main " + activeImg.match(/product-./gm)[0]}
            />
          </div>
        </div>
        <button
          class={`carousel-control-prev`}
          type="button"
          onClick={handlePrevImg}
          style={{ opacity: "1" }}
        >
          <img src={iconPrev} alt="prev" class={` ${classes.prevImgIcon}`} />
        </button>
        <button
          class="carousel-control-next"
          type="button"
          onClick={handleNextImg}
          style={{ opacity: "1" }}
        >
          <img src={iconNext} alt="next" class={` ${classes.nextImgIcon}`} />
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
