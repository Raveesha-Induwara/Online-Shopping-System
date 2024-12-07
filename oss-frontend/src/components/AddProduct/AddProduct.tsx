import React, { useState } from "react";
import "./AddProduct.css";
import axios from "../../service/api-client";
import { Container, Button, TextField, Box, Typography } from "@mui/material";

interface AddProductPopupProps {
  onClose: () => void;
}

const AddProductPopup: React.FC<AddProductPopupProps> = ({ onClose }) => {
  const [formValues, setFormValues] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_price: "",
    product_quantity: "",
  });

  const addProduct = () => {
    console.log(formValues);
    axios
      .post(`/products`, { formValues })
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert("An error occurred while fetching data");
        console.error(error.message);
      });
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    alert("Form submitted");
    event.preventDefault(); // Prevent the form from refreshing the page
    setFormValues(formValues);
    alert(formValues);
    addProduct();
  };

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
            // onChange={handleInputChange}
          />
          <div className="error"></div>

          <label htmlFor="product-description">Product Description</label>
          <textarea
            id="product-description"
            placeholder="Enter product description"
            // onChange={handleInputChange}
          ></textarea>

          <label htmlFor="product-category">Product Category</label>
          <input
            type="text"
            id="product-category"
            placeholder="Enter product category"
            onChange={handleInputChange}
          />

          <label htmlFor="product-quantity">Product Quantity</label>
          <input
            type="number"
            id="product-quantity"
            placeholder="Enter product quantity"
            onChange={handleInputChange}
          />

          <label htmlFor="product-price">Product Price</label>
          <input
            type="text"
            id="product-price"
            placeholder="Enter product price"
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="add-product-btn"
            onSubmit={() => handleSubmit}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPopup;
