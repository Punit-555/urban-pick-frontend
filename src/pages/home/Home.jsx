import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/features/auth/authSlice";
import Header from "../../components/header/Header";
import navVideo from '../../assets/navVideo.mp4';
import { motion } from "framer-motion";
import "./home.css"
import searchIcon from "../../assets/search.png";
import axios from "axios";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
 

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");


  

  const fetchAllProductDetails =  async() =>{
       try {
         const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        console.log("RE", response)
         setProductData(response.data);
         console.log(response);
       } catch (error) {
         console.log(error);        
       }
  }
  
  useEffect(()=>{
   fetchAllProductDetails();
  },[])
console.log("P", productData);
const filteredProducts = productData.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div >
       <video
       src={navVideo}
  autoPlay
  muted
  loop
  className="home-video"
    />
     
    <motion.div
      className="hero-section app-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >

      <div className="searchbox-container">
<input 
  type="search" 
  name="searchbox" 
  placeholder="Enter your title of the product" 
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
        <button className="searchBtn"> <img src={searchIcon} alt="" /> Search</button>
      </div>

      <div className="product-grid">
        {
          filteredProducts.map((product) => <Card key={product.id} product={product} />)

        }
        
      </div>

    </motion.div>
    </div>


  );
};

export default Home;
