import React from "react";
import "./UpdateProduct.css";

interface UpdateProductPopupProps {
  onClose: () => void;
}

const UpdateProductPopup: React.FC<UpdateProductPopupProps> = ({ onClose }) => {
  return (
    <div className="update-popup-overlay">
      <div className="update-popup-content">
        <div className="update-popup-header">
          <h2>Update Product</h2>
          <button className="update-popup-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className="update-product-form">
          <label htmlFor="update-product-title">Product Title</label>
          <input
            type="text"
            id="update-product-title"
            placeholder="Enter product title"
          />

          <label htmlFor="update-product-description">Product Description</label>
          <textarea
            id="update-product-description"
            placeholder="Enter product description"
          ></textarea>

          <label htmlFor="update-product-category">Product Category</label>
          <input
            type="text"
            id="update-product-category"
            placeholder="Enter product category"
          />

          <label htmlFor="update-product-quantity">Product Quantity</label>
          <input
            type="number"
            id="update-product-quantity"
            placeholder="Enter product quantity"
          />

          <label htmlFor="update-product-price">Product Price</label>
          <input
            type="text"
            id="product-price"
            placeholder="Enter product price"
          />

          <button type="submit" className="update-product-btn">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductPopup;
