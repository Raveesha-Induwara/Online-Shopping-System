import React from "react";
import "./DeleteCategory.css";

interface DeleteConfirmationPopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="delete-popup-overlay">
      <div className="delete-popup">
        <h2>Are you sure you want to delete this category?</h2>
        <div className="delete-popup-buttons">
          <button className="delete-popup-confirm-btn" onClick={onConfirm}>
            Yes
          </button>
          <button className="delete-popup-cancel-btn" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
