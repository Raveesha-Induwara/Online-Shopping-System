// import React, {useState} from "react";
// import "./Categories.css";
// import AddCategoryPopup from "../../Components/AddCategory";
// // import { AppLayout } from "../../Components/AppLayout";
// import { RiEdit2Fill } from "react-icons/ri";
// import { MdDelete } from "react-icons/md";
// import { BiSolidDetail } from "react-icons/bi";

// const Categories: React.FC = () => {
//   const categories = [
//     { id: "C001", name: "Ladies frock", description: "GFLOCK" },
//     { id: "C002", name: "Trousers", description: "Huf & Dee" },
//   ];
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handlePopupToggle = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };


//   return (
//     <div className="categories-content">
//       <h1 className="categories-title">Categories</h1>
//       <div className="categories-header">
//         <input
//           type="text"
//           placeholder="Enter category..."
//           className="categories-search"
//         />
//         <button className="categories-search-btn">Search</button>
//         <button className="categories-add-btn" onClick={handlePopupToggle}> Add New Category </button>
//       </div>
//       <table className="categories-table">
//         <thead>
//           <tr>
//             <th>Category ID</th>
//             <th>Category Name</th>
//             <th>Category Description</th>
//             <th></th>
//             <th></th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id}>
//               <td>{category.id}</td>
//               <td>{category.name}</td>
//               <td>{category.description}</td>
//               <td><BiSolidDetail fontSize="1.5em"/></td>
//               <td><RiEdit2Fill fontSize="1.5em" /></td>
//               <td><MdDelete fontSize="1.5em"/></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {isPopupOpen && <AddCategoryPopup onClose={handlePopupToggle} />}
//     </div>
//   );
// };

// export default Categories;



import React, { useState } from "react";
import "./Categories.css";
import AddCategoryPopup from "../../Components/AddCategory";
import UpdateCategoryPopup from "../../Components/UpdateCategory";
import CategoryViewPopup from "../../Components/CategoryView";

import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";

const Categories: React.FC = () => {
  const categories = [
    { id: "C001", name: "Ladies frock", description: "GFLOCK", productIds: ["P001", "P002"] },
    { id: "C002", name: "Trousers", description: "Huf & Dee", productIds: ["P003", "P004"] },
  ];

  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [isViewPopupOpen, setViewPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    name: string;
    description: string;
    productIds: string[];
  } | null>(null);

  const handleAddPopupToggle = () => {
    setAddPopupOpen(!isAddPopupOpen);
  };

  const handleUpdatePopupOpen = (category: typeof categories[0]) => {
    setSelectedCategory(category);
    setUpdatePopupOpen(true);
  };

  const handleViewPopupOpen = (category: typeof categories[0]) => {
    setSelectedCategory(category);
    setViewPopupOpen(true);
  };

  const handleUpdateCategory = (id: string, name: string, description: string) => {
    console.log("Updated Category:", { id, name, description });
    setUpdatePopupOpen(false);
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
                <MdDelete fontSize="1.5em" style={{ cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Category Popup */}
      {isAddPopupOpen && <AddCategoryPopup onClose={handleAddPopupToggle} />}

      {/* Update Category Popup */}
      {isUpdatePopupOpen && selectedCategory && (
        <UpdateCategoryPopup
          category={selectedCategory}
          onClose={() => setUpdatePopupOpen(false)}
          onUpdate={handleUpdateCategory}
        />
      )}

      {/* View Category Popup */}
      {isViewPopupOpen && selectedCategory && (
        <CategoryViewPopup
          categoryId={selectedCategory.id}
          categoryName={selectedCategory.name}
          categoryDescription={selectedCategory.description}
          productIds={selectedCategory.productIds}
          onClose={() => setViewPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default Categories;
