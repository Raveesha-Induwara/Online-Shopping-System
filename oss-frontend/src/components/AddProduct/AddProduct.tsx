import React from "react";
import "./AddProduct.css";

interface AddProductPopupProps {
  onClose: () => void;
}

const AddProductPopup: React.FC<AddProductPopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Add NewProduct</h2>
          <button className="popup-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className="add-product-form">
          <label htmlFor="product-title">Product Title</label>
          <input
            type="text"
            id="product-title"
            placeholder="Enter product title"
          />

          <label htmlFor="product-description">Product Description</label>
          <textarea
            id="product-description"
            placeholder="Enter product description"
          ></textarea>

<label htmlFor="product-category">Product Category</label>
          <input
            type="text"
            id="product-category"
            placeholder="Enter product category"
          />

<label htmlFor="product-quantity">Product Quantity</label>
          <input
            type="number"
            id="product-quantity"
            placeholder="Enter product quantity"
          />

<label htmlFor="product-price">Product Price</label>
          <input
            type="text"
            id="product-price"
            placeholder="Enter product price"
          />

          <button type="submit" className="add-product-btn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPopup;
