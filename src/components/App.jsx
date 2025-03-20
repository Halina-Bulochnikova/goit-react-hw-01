import Product from "./Product.jsx";
import Button from "./Button.jsx";
import Foto from "../assets/salad (1).jpg"

 
export default function Eats() {
   return (
     <div>
      
       <h1>Best selling</h1> 
       <img src={Foto} style={fotoStyle}/>
       
       <Button>Click</Button>
       <Product
         name="Tacos With Lime"
         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
         price={10.99}
       />
       <Product
         name="Fries and Burger"
         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
         price={14.29}
       />    
     </div>
   );
 }

const fotoStyle = {
        height: 800,
        width: 1440,
        padding: 36,
}