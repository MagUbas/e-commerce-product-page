import { useState } from "react";
import imageProduct1 from "./images/image-product-1.jpg";
import imageProduct2 from "./images/image-product-2.jpg";
import imageProduct3 from "./images/image-product-3.jpg";
import imageProduct4 from "./images/image-product-4.jpg";
import classes from "./imgContainer.module.css";

const ImgContainer = () => {
  const [activeImg, setActiveImg] = useState(imageProduct1);
  const thumbnail = [
    imageProduct1,
    imageProduct2,
    imageProduct3,
    imageProduct4,
  ].map((img) => {
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

  return (
    <div className="col">
      <img
        src={activeImg}
        className="rounded img-fluid"
        alt={activeImg.match(/product-./gm)[0]}
      />
      <div className={`row ${classes.imgRow}`} style={{ marginTop: "20px" }}>
        {thumbnail}
      </div>
    </div>
  );
};

export default ImgContainer;
