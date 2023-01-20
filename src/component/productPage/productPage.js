import classes from "./productPage.module.css";
import ImgContainer from "./imgContainer/imgContainer";
import Description from "./description/description";

const ProductPage = (props) => {
  return (
    <div className={`container ${classes.productPageBody}`}>
      <div className="row">
        <ImgContainer />
        <Description />
      </div>
    </div>
  );
};

export default ProductPage;
