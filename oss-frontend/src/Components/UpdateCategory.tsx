// import React, { useState } from "react";
// import "./UpdateCategory.css";

// interface UpdateCategory {
//   category: { id: string; name: string; description: string } | null;
//   onClose: () => void;
//   onUpdate: (id: string, name: string, description: string) => void;
// }

// const UpdateCategory: React.FC<UpdateCategory> = ({
//   category,
//   onClose,
//   onUpdate,
// }) => {
//   const [name, setName] = useState(category?.name || "");
//   const [description, setDescription] = useState(category?.description || "");

//   const handleUpdate = () => {
//     if (category) {
//       onUpdate(category.id, name, description);
//       onClose();
//     }
//   };

//   return (
//     <div className="update-popup-overlay">
//       <div className="popup-container">
//         <h2>Update Category</h2>
//         <div className="popup-content">
//           <label>Category Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label>Category Description</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <div className="popup-actions">
//             <button className="popup-btn" onClick={handleUpdate}>
//               Update
//             </button>
//             <button className="popup-btn-cancel" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateCategory;



import React, { useState } from "react";
import { Grid, OutlinedInput, FormLabel, Button, Paper } from "@mui/material";

interface UpdateCategoryProps {
  category: { id: string; name: string; description: string } | null;
  onClose: () => void;
  onUpdate: (id: string, name: string, description: string) => void;
}

const UpdateCategory: React.FC<UpdateCategoryProps> = ({ category, onClose, onUpdate }) => {
  const [name, setName] = useState(category?.name || "");
  const [description, setDescription] = useState(category?.description || "");

  const handleUpdate = () => {
    if (category) {
      console.log("Updated Details:", {
        id: category.id,
        name,
        description,
      });
      onUpdate(category.id, name, description);
      onClose();
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        padding: 3,
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        marginTop: 5,
      }}
    >
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormLabel htmlFor="category-name" required>
              Category Name
            </FormLabel>
            <OutlinedInput
              id="category-name"
              value={name}
              placeholder="Enter category name"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormLabel htmlFor="category-description" required>
              Category Description
            </FormLabel>
            <OutlinedInput
              id="category-description"
              value={description}
              placeholder="Enter category description"
              fullWidth
              multiline
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button onClick={handleUpdate} variant="contained" color="primary">
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UpdateCategory;
