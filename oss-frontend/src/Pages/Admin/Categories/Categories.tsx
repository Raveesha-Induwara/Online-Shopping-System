import React, { useEffect, useState } from "react";
import "./Categories.css";
import AddCategoryPopup from "../../../Components/AddCategory/AddCategory";
import UpdateCategory from "../../../Components/UpdateCategory";
import CategoryViewPopup from "../../../Components/CategoryView/CategoryView";
import DeleteConfirmationPopup from "../../../Components/DeleteCategory/DeleteCategory";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";
import axios from "axios";

interface Category {
  id: string;
  name: string;
  description: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [isViewPopupOpen, setViewPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  useEffect(() => {
    axios
      .get("http://localhost:8083/api/v1/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        alert("An error occurred while fetching data" + error.message);
      });
  }, []);

  const handleAddPopupToggle = () => {
    setAddPopupOpen(!isAddPopupOpen);
  };

  const handleUpdatePopupOpen = (category: (typeof categories)[0]) => {
    setSelectedCategory(category);
    setUpdatePopupOpen(true);
  };

  const handleViewPopupOpen = (category: (typeof categories)[0]) => {
    setSelectedCategory(category);
    setViewPopupOpen(true);
  };

  const handleDeletePopupOpen = (category: (typeof categories)[0]) => {
    setSelectedCategory(category);
    setDeletePopupOpen(true);
  };

  const handleDeleteCategory = () => {
    if (selectedCategory) {
      setCategories((prev) =>
        prev.filter((cat) => cat.id !== selectedCategory.id)
      );
      setDeletePopupOpen(false);
    }
  };

  return (
    <div className="categories-content">
      <h1 className="categories-title">Categories</h1>
      <div className="categories-header">
        <input
          type="text"
          placeholder="Enter category..."
          className="categories-search"
        />
        <button className="categories-search-btn">Search</button>
        <button className="categories-add-btn" onClick={handleAddPopupToggle}>
          Add New Category
        </button>
      </div>
      <table className="categories-table">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Category Description</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <BiSolidDetail
                  fontSize="1.5em"
                  onClick={() => handleViewPopupOpen(category)}
                  style={{ cursor: "pointer" }}
                />
              </td>
              <td>
                <RiEdit2Fill
                  fontSize="1.5em"
                  onClick={() => handleUpdatePopupOpen(category)}
                  style={{ cursor: "pointer" }}
                />
              </td>
              <td>
                <MdDelete
                  fontSize="1.5em"
                  onClick={() => handleDeletePopupOpen(category)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddPopupOpen && <AddCategoryPopup onClose={handleAddPopupToggle} />}
      {isUpdatePopupOpen && selectedCategory && (
        <UpdateCategory
          category={selectedCategory}
          onClose={() => setUpdatePopupOpen(false)}
          onUpdate={() => {}}
        />
      )}
      {isViewPopupOpen && selectedCategory && (
        <CategoryViewPopup
          categoryId={selectedCategory.id}
          categoryName={selectedCategory.name}
          categoryDescription={selectedCategory.description}
          onClose={() => setViewPopupOpen(false)}
        />
      )}
      {isDeletePopupOpen && (
        <DeleteConfirmationPopup
          onClose={() => setDeletePopupOpen(false)}
          onConfirm={handleDeleteCategory}
        />
      )}
    </div>
  );
};

export default Categories;
