import classes from "./App.module.css";
import NavBar from "./component/NavBar/navBar";
import ProductPage from "./component/productPage/productPage";
function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <ProductPage />
    </div>
  );
}

export default App;
