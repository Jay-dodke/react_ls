import "./product.css";
import Price from "./price";
function Product({title, price, features}) {
  return (
    <div className="product">
      <p>product</p>
      <p>Discription</p>
      <Price OldPrice={500} NewPrice={800} />
    </div>
  );
}

export default Product;
