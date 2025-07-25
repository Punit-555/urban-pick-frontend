import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import shirt1 from "../../assets/shirt1.jpg"



function ProductDetails() {
  return (
    <div>
        <Header/>
      <div className="flexContainer">
        <img src={shirt1} alt=""  height={200} width={200}/>
        <h3>John Hardy Women's Legends Naga Gold & Silver Dragon</h3>
      </div>








        <Footer/>
    </div>
  )
}

export default ProductDetails