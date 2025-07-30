import shirt1 from "../../assets/shirt1.jpg"
import "./productDetails.css"



function ProductDetails() {
  return (
    
        <section className="flexContainer">
      <div >
        <img src={shirt1} alt=""  height={400} width={300}/>
        <div className="btn3">
        <button>ADD TO CART</button>
        <button className="buy-btn">BUY NOW</button>
        </div>
        
      </div>

      <div>
        <p className="headPra">DEEMON</p>
        <p>John Hardy Women's Legends Naga Gold & Silver Dragon</p>
        <p className="specialPrice">Special price</p>

        <p className="price2">$308 <span className="priceless">$589</span> <span className="offColor"> 35%off</span> </p>
        <p className="rating"><span>4</span> 6,254 rating and 424 reviews</p>

      </div>

      </section>
  
  )
}

export default ProductDetails