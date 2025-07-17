import React from "react";
import "./card.css";

const Card = ({ product }) => {
  return (
    <div className="product-card-dark">
      <div className="product-img-box">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-content">
        <h3>{product.title}</h3>
        <p className="price">₹{(product.price * 83).toFixed(0)}</p>
        <span className="category">{product.category}</span>
     <div className="card-buttons">
          <button className="btn-outline">+ Add to Cart</button>
          <button className="btn-filled">+ Buy Now</button>
      </div>
      </div>

    </div>
  );
};

export default Card;
