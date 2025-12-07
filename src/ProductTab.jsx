import Product from "./Product.jsx";

function ProductTab() {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px", // spacing between cards
    padding: "20px",
  };

  return (
    <div style={styles}>
      <Product title="Logitech MX Master 3S Wireless Mouse" idx={0} />
      <Product title="Apple Pencil (2nd Generation)" idx={1} />
      <Product title="Sony WH-1000XM5 Noise Cancelling Headphones" idx={2} />
      <Product title="Samsung 27'' 4K UHD Monitor" idx={3} />
    </div>
  );
}

export default ProductTab;
