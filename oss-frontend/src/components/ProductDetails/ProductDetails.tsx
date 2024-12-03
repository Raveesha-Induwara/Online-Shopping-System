
import React, { useState } from "react";
import "./ProductDetails.css";
import DeleteConfirmationPopup from "../DeleteConfirmationPopup/DeleteConfirmationPopup";
//import UpdateProductPopup from "../UpdateProduct/UpdateProduct";
//import UpdateProductPopup from "../UpdateProduct/UpdateProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";




interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    image?: string;
    category?: string;
  };
  onClose: () => void;
  onUpdate: () => void;
  onDelete: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onClose,
  onUpdate,
  onDelete,
}) => {
    const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

    const handleOpenUpdatePopup = () => {
      setIsUpdatePopupOpen(true); // Open the UpdateProduct popup
    };
  
    const handleCloseUpdatePopup = () => {
      setIsUpdatePopupOpen(false); // Close the UpdateProduct popup
    };

    const handleOpenDeletePopup = () => {
        setIsDeletePopupOpen(true);
      };
    
      const handleCloseDeletePopup = () => {
        setIsDeletePopupOpen(false);
        onClose(); // Close ProductDetails popup if "No" is clicked
      };
    
      const handleConfirmDelete = () => {
        setIsDeletePopupOpen(false);
        alert("This Product is Successfully Deleted");
        onDelete(); // Trigger the onDelete callback
      };
  

  return (
    <div className="details-popup-overlay">
      <div className="details-popup-content">
        <div className="details-popup-header">
          <h2>Product Details</h2>
          <button className="details-popup-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="details-popup-body">
          <img
            src={product.image || "/default-product-image.jpg"}
            alt="Product"
            className="details-product-image"
          />
          <div className="details-product-info">
            <p>
              <strong>Product ID:</strong> {product.id}
            </p>
            <p>
              <strong>Product Name:</strong> {product.name}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <p>
              <strong>Category:</strong> {product.category || "N/A"}
            </p>
            <p>
              <strong>Price:</strong> {product.price}
            </p>
          </div>
          <div className="details-product-actions">
            <button className="update-btn" onClick={handleOpenUpdatePopup}>
              Update
            </button>
            <button className="delete-btn" onClick={handleOpenDeletePopup}>
              Delete
            </button>
          </div>
        </div>
    {/* Conditionally render the UpdateProduct popup */}
    {isUpdatePopupOpen && (
          <UpdateProduct product={product} onClose={handleCloseUpdatePopup} />
        )}

        {/* Conditionally render the DeleteConfirmationPopup */}
        {isDeletePopupOpen && (
          <DeleteConfirmationPopup
            isOpen={isDeletePopupOpen}
            onClose={handleCloseDeletePopup}
            onConfirm={handleConfirmDelete}
          />
      )}

    </div>
    </div>
  );
};

export default ProductDetails;
