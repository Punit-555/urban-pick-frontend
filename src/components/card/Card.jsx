import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleDescription = () => setShowMore(!showMore);

  const descriptionLimit = 100; // characters before truncating

  const truncatedDescription =
    product.description.length > descriptionLimit && !showMore
      ? product.description.slice(0, descriptionLimit) + "..."
      : product.description;

  return (
    <div className="product-card-dark">
      <div className="product-img-box">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-content">
        <h3>{product.title}</h3>
        <p className="price">₹{(product.price * 83).toFixed(0)}</p>
        <span className="category">{product.category.name}</span>
        <span className="description">
          {truncatedDescription}
          {product.description.length > descriptionLimit && (
            <p className="show-more-btn" onClick={toggleDescription}>
              {showMore ? "Show Less" : "View More"}
            </p>
          )}
        </span>
        <div className="card-buttons">
          <button className="btn-outline">+ Add to Cart</button>
          <button className="btn-filled">
            <Link to="/ProductDetails">+ Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
