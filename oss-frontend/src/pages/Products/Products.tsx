import React, { useState } from "react";
import "./Products.css";  // You can change the CSS filename as needed

import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AddProductPopup from "../../components/AddProduct/AddProduct";  // Ensure to update the component path as needed
//import UpdateProductPopup from "../../components/UpdateProduct/UpdateProduct";
//import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductsContent: React.FC = () => {
  const products = [
    { id: "P001", name: "Product 1", description: "Description of Product 1",price:"xxxx" },
    { id: "P002", name: "Product 2", description: "Description of Product 2",price:"xxxx" },
    { id: "P003", name: "Product 3", description: "Description of Product 3",price:"xxxx" },

  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  
  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleRowClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleUpdateProduct = () => {
    console.log("Update product clicked");
  };

  const handleDeleteProduct = () => {
    console.log("Delete product clicked");
  };

  return (
    <div className="products-content">
      <h1 className="products-title">Products</h1>
      <div className="products-header">
        <input
          type="text"
          placeholder="Enter product..."
          className="products-search"
        />
        <button className="products-search-btn">Search</button>
        <button className="products-add-btn" onClick={handlePopupToggle}>
          Add New Product
        </button>
      </div>
      <table className="products-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}
            key={product.id}
              onClick={() => handleRowClick(product)}
              style={{ cursor: "pointer" }}
            
            >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td><AiOutlineEdit fontSize="1.5em" /></td>
              <td><MdDelete fontSize="1.5em" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPopupOpen && <AddProductPopup onClose={handlePopupToggle} />}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
          onUpdate={handleUpdateProduct}
          onDelete={handleDeleteProduct}
        />
      )}
   
    </div>
  );
};

export default ProductsContent;
