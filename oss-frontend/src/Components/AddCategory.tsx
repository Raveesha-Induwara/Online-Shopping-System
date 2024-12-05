import React from "react";
import "../Components/AddCategory.css";

interface AddCategory {
  onClose: () => void;
}

const AddCategory: React.FC<AddCategory> = ({ onClose }) => {
  return (
    <div className="add-popup-overlay">
      <div className="add-popup-content">
        <div className="popup-header">
          <h2>Add Category</h2>
          <button className="popup-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className="add-category-form">
          {/* <label htmlFor="category-title">Category ID</label>
          <input
            type="text"
            id="category-id"
            placeholder="Enter Category ID"
          /> */}
          <label htmlFor="category-name">Category Name</label>
          <input
            type="text"
            id="category-name"
            placeholder="Enter Category Name"
          />
          <label htmlFor="category-description">Category Description</label>
          <textarea
            id="category-description"
            placeholder="Enter Category Description"
          ></textarea>

          <button type="submit" className="add-category-btn">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
