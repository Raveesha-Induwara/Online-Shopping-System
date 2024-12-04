import React, { useState } from "react";
import "./UpdateCategory.css";

interface UpdateCategory {
  category: { id: string; name: string; description: string } | null;
  onClose: () => void;
  onUpdate: (id: string, name: string, description: string) => void;
}

const UpdateCategory: React.FC<UpdateCategory> = ({
  category,
  onClose,
  onUpdate,
}) => {
  const [name, setName] = useState(category?.name || "");
  const [description, setDescription] = useState(category?.description || "");

  const handleUpdate = () => {
    if (category) {
      onUpdate(category.id, name, description);
      onClose();
    }
  };

  return (
    <div className="update-popup-overlay">
      <div className="popup-container">
        <h2>Update Category</h2>
        <div className="popup-content">
          <label>Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Category Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="popup-actions">
            <button className="popup-btn" onClick={handleUpdate}>
              Update
            </button>
            <button className="popup-btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
