import classes from "./productPage.module.css";
import ImgContainer from "./imgContainer/imgContainer";
import Description from "./description/description";

const ProductPage = (props) => {
  return (
    <div className={`container  ${classes.productPageBody}`}>
      <div className="row my-4 mx-1 mx-sm-5 mx-mb-0 ">
        <ImgContainer imgSet={props.item.imgSrc} />
        <Description item={props.item} />
      </div>
    </div>
  );
};

export default ProductPage;
