import shirt1 from "../../assets/shirt1.jpg"
import { motion } from "framer-motion";



function ProductDetails() {
  return (
    
        <section className="flexContainer">
      <div >
        <img src={shirt1} alt=""  height={400} width={300}/>
        <button>ADD TO CART</button>
        <button>BUY NOW</button>
        
      </div>

      <div>
        <p>DEEMON</p>
        <p>John Hardy Women's Legends Naga Gold & Silver Dragon</p>
        <p>Special price</p>

        <p>$308 <span>$589</span> <span> 35% off</span> </p>
        <p><span>4</span> 6,254 rating and 424 reviews</p>

      </div>

      </section>
  
  )
}

export default ProductDetails