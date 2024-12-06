import React, { useState } from "react";
import "./UpdateProduct.css";

interface Props {
  product: {
    id: string;
    image: string;
    product_name: string;
    product_description: string;
    product_category: string;
    product_price: string;
    product_quantity: string;
  };
  onClose: () => void;
}

const UpdateProductPopup: React.FC<Props> = ({ product, onClose }) => {
  const [formValues, setFormValues] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_price: "",
    product_quantity: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    console.log(formValues);
  };


  return (
    <div className="update-popup-overlay">
      <div className="update-popup-content">
        <div className="update-popup-header">
          <h2>Update Product</h2>
          <button className="update-popup-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <form className="update-product-form" onSubmit={handleSubmit}>
          <label htmlFor="update-product-title">Product Title</label>
          <input
            type="text"
            id="update-product-title"
            placeholder="Enter product title"
            value={product.product_name}
            onChange={handleInputChange}
          />

          <label htmlFor="update-product-description">
            Product Description
          </label>
          <textarea
            id="update-product-description"
            placeholder="Enter product description"
            value={product.product_description}
          ></textarea>

          <label htmlFor="update-product-category">Product Category</label>
          <input
            type="text"
            id="update-product-category"
            placeholder="Enter product category"
            value={product.product_category}
          />

          <label htmlFor="update-product-quantity">Product Quantity</label>
          <input
            type="number"
            id="update-product-quantity"
            placeholder="Enter product quantity"
            value={product.product_quantity}
          />

          <label htmlFor="update-product-price">Product Price</label>
          <input
            type="text"
            id="product-price"
            placeholder="Enter product price"
            value={product.product_price}
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
