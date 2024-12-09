import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./UpdateProduct.css";

interface UpdateProductPopupProps {
  onClose: () => void;
}

const UpdateProductPopup: React.FC<UpdateProductPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const validate = () => {
    const newErrors: any = {};
    if (!formData.title) newErrors.title = "Product title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.quantity || Number(formData.quantity) <= 0)
      newErrors.quantity = "Quantity must be a positive number";
    if (!formData.price || isNaN(Number(formData.price)))
      newErrors.price = "Price must be a valid number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Updated form data:", formData);
      alert("Product updated successfully!");
      // Update product logic here
      onClose();
    }
  };

  return (
    <div className="update-popup-overlay">
      <div className="update-popup-content">
        <div className="update-popup-header">
          <Typography variant="h3">Update Product</Typography>
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        <form className="update-product-form" onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={1.5}>
            <TextField
              id="title"
              label="Product Title"
              variant="outlined"
              value={formData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
            />
            <TextField
              id="description"
              label="Product Description"
              variant="outlined"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
            <TextField
              id="category"
              label="Product Category"
              variant="outlined"
              value={formData.category}
              onChange={handleChange}
              error={!!errors.category}
              helperText={errors.category}
            />
            <TextField
              id="quantity"
              label="Product Quantity"
              variant="outlined"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              error={!!errors.quantity}
              helperText={errors.quantity}
            />
            <TextField
              id="price"
              label="Product Price"
              variant="outlined"
              type="text"
              value={formData.price}
              onChange={handleChange}
              error={!!errors.price}
              helperText={errors.price}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                padding: "10px",
                fontSize: "16px",
                backgroundColor: "rgb(5, 5, 85)",
                color: "white",
                borderRadius: "0.5em",
                marginTop: "30px",
                "&:hover": {
                  backgroundColor: "rgb(3, 3, 60)",
                },
              }}
            >
              Update Product
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductPopup;
