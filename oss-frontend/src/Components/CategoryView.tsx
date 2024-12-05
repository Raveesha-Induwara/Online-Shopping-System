import React from "react";
import "../Components/CategoryView.css";

interface CategoryView {
  categoryId: string;
  categoryName: string;
  categoryDescription: string;
  productIds: string[];
  onClose: () => void;
}

const CategoryView: React.FC<CategoryView> = ({
  categoryId,
  categoryName,
  categoryDescription,
  productIds,
  onClose,
}) => {
  return (
    <div className="view-popup-overlay">
      <div className="view-popup-content">
        {/* <div>
            <IoMdCloseCircle 
                style={{position:'relative',marginLeft:'280px'}} 
                fontSize='1.5em' 
                onClick={onClose} 
                onMouseOver={({target})=>target.style.color="red"} 
                onMouseOut={({target})=>target.style.color="black"}/>
            </div> */}
        <h2 className="cat-details-header">Category Details</h2>
        <div>
          <p>
            <strong>Category ID:</strong> {categoryId}
          </p>
          <p>
            <strong>Category Name:</strong> {categoryName}
          </p>
          <p>
            <strong>Categoty Description: </strong>
            {categoryDescription}
          </p>
          <p>
            <strong>Product IDs:</strong>
          </p>
          <p>
            <ul>
              {productIds.map((id) => (
                <li key={id}>{id}</li>
              ))}
            </ul>
          </p>
        </div>
        {/* <div className="popup-buttons">
          <button className="update-btn">Update</button>
          <button className="delete-btn">Delete</button>
        </div> */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CategoryView;
