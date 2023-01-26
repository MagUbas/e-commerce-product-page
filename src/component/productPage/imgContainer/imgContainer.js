import { useState } from "react";
import imageProduct1 from "./images/image-product-1.jpg";
import imageProduct2 from "./images/image-product-2.jpg";
import imageProduct3 from "./images/image-product-3.jpg";
import imageProduct4 from "./images/image-product-4.jpg";
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
          alt={img.match(/product-./gm)[0]}
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
    <div className="col">
      <img
        src={activeImg}
        className="rounded img-fluid"
        alt={activeImg.match(/product-./gm)[0]}
        onClick={() => setShowModal(true)}
      />
      <div className={`row ${classes.imgRow}`} style={{ marginTop: "20px" }}>
        {thumbnail}
      </div>
      {showModal ? (
        <Modal
          activeImg={activeImg}
          thumbnail={thumbnail}
          closeModal={() => setShowModal(false)}
          nextImg={handleNextImg}
          prevImg={handlePrevImg}
        >
          <img
            src={activeImg}
            className="rounded img-fluid"
            alt={activeImg.match(/product-./gm)[0]}
          />
          <div
            className={`row ${classes.imgRow}`}
            style={{ marginTop: "20px" }}
          >
            {thumbnail}
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default ImgContainer;
