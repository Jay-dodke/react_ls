import "./product.css";
import Price from "./price";
function Product({title, idx}) {
  let descriptionStyle = {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#444",
    margin: "4px 0 8px 0",
    fontWeight: 400,
    letterSpacing: "0.2px",
    textAlign: "left", // FIX: bullets must align left
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "18px", // space for bullet
  };

  let OldPrice = ["11096", "11097", "11098", "11099"];
  let NewPrice = ["9999", "8999", "7999", "6999"];
  let Description = [
    [
      "Ergonomic flagship mouse with ultra-precise tracking and silent clicks.",
      "Seamless multi-device workflow control with advanced ergonomics.",
    ],
    [
      "Pixel-perfect stylus designed for accuracy and low latency on iPads.",
      "Supports magnetic charging with intuitive gesture controls.",
    ],
    [
      "Top-tier ANC headphones delivering immersive, high-fidelity sound.",
      "Enhanced voice clarity and exceptional all-day wearing comfort.",
    ],
    [
      "Vibrant 4K UHD display offering stunning clarity and color accuracy.",
      "Ideal for productivity workflows, gaming, and entertainment.",
    ],
  ];

  return (
    <div className="product">
      <h4>{title}</h4>
      <p style={descriptionStyle}>{Description[idx][0]}</p>
      <p style={descriptionStyle}>{Description[idx][1]}</p>
      <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]} />
    </div>
  );
}

export default Product;
