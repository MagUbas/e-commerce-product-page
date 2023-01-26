import classes from "./App.module.css";
import ProductPage from "./component/productPage/productPage";
function App() {
  return (
    <div className={classes.app}>
      <ProductPage />
    </div>
  );
}

export default App;
