import React, { useEffect, useState } from "react";
import "./Products.css"; // You can change the CSS filename as needed
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AddProductPopup from "../../../Components/AddProduct/AddProduct"; // Ensure to update the component path as needed
//import UpdateProductPopup from "../../components/UpdateProduct/UpdateProduct";
import ProductDetails from "../../../Components/ProductDetails/ProductDetails";
import axios from "axios";

interface Product {
  id: 1,
  product_name: string,
  product_description: string,
  product_category: string,
  product_price: number,
  product_rate: number,
}

const ProductsContent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState<Array<Product>>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8083/api/v1/products")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        alert("An error occurred while fetching data" + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


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
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr
              key={product.id}
              onClick={() => handleRowClick(product)}
              style={{ cursor: "pointer" }}
            >
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>{product.product_description}</td>
              <td>{product.product_category}</td>
              <td>{product.product_price}</td>
              <td>{product.product_price}</td>
              <td>
                <AiOutlineEdit fontSize="1.5em" />
              </td>
              <td>
                <MdDelete fontSize="1.5em" />
              </td>
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
