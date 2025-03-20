import { HiCurrencyDollar } from "react-icons/hi";
import Button from "./Button.jsx";


 function Product({ name, imgUrl, price }) {
    return (
      <div>
        <h2 style={alertStyles}>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p><HiCurrencyDollar className="my-icon" size={24} /> Price: {price} credits</p>

      </div>
      
    );
  };
  const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "gray",
    color: "white",
  };
  
export default Product;