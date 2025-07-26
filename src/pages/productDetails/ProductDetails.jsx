import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import shirt1 from "../../assets/shirt1.jpg"
import { motion } from "framer-motion";



function ProductDetails() {
  return (
    <motion.div  initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}>
      <div className="flexContainer">
        <img src={shirt1} alt=""  height={200} width={200}/>
        <h3>John Hardy Women's Legends Naga Gold & Silver Dragon</h3>
      </div>
    </motion.div>
  )
}

export default ProductDetails