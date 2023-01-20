import classes from "./description.module.css";

const Description = () => {
  return (
    <div className={`col  ${classes.descriptionBody}`}>
      <p>SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className={`${classes.descriptionText}`}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="row">
        <h2 className={`col ${classes.descriptionPrice}`}>$125.00</h2>
        <p className={`col ${classes.descriptionSale}`}>50%</p>
      </div>
      <div className={` ${classes.descriptionOldPrice}`}>$250.00</div>
      <div>cart</div>
    </div>
  );
};

export default Description;
