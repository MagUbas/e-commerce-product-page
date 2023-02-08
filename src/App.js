import classes from "./App.module.css";
import NavBar from "./component/NavBar/navBar";
import ProductPage from "./component/productPage/productPage";
import img1 from "./images/fall_limited_edition_sneakers/image-product-1.jpg";
import img2 from "./images/fall_limited_edition_sneakers/image-product-2.jpg";
import img3 from "./images/fall_limited_edition_sneakers/image-product-3.jpg";
import img4 from "./images/fall_limited_edition_sneakers/image-product-4.jpg";
function App() {
  const item = {
    company: "SNEAKER COMPANY",
    title: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`,
    price: 125,
    oldPrice: 250,
    imgSrc: [img1, img2, img3, img4],
  };

  return (
    <div className={classes.app}>
      <NavBar />
      <ProductPage item={item} />
    </div>
  );
}

export default App;
