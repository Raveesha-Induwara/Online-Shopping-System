// import React from "react";
// import "./AddCategory.css";

// interface AddCategory {
//   onClose: () => void;
// }

// const AddCategory: React.FC<AddCategory> = ({ onClose }) => {
//   return (
//     <div className="add-popup-overlay">
//       <div className="add-popup-content">
//         <div className="popup-header">
//           <h2>Add Category</h2>
//           <button className="popup-close-btn" onClick={onClose}>
//             &times;
//           </button>
//         </div>
//         <form className="add-category-form">
//           {/* <label htmlFor="category-title">Category ID</label>
//           <input
//             type="text"
//             id="category-id"
//             placeholder="Enter Category ID"
//           /> */}
//           <label htmlFor="category-name">Category Name</label>
//           <input
//             type="text"
//             id="category-name"
//             placeholder="Enter Category Name"
//           />
//           <label htmlFor="category-description">Category Description</label>
//           <textarea
//             id="category-description"
//             placeholder="Enter Category Description"
//           ></textarea>

//           <button type="submit" className="add-category-btn">
//             Add Category
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCategory;



import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";

interface AddCategoryProps {
  onClose: () => void;
}

const AddCategory: React.FC<AddCategoryProps> = ({ onClose }) => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [saveForLater, setSaveForLater] = useState(false);

  const onSubmit = handleSubmit((data) => {
    console.log("Form Data:", data);
    // Handle form submission logic
    onClose();
  });

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={onSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            id="category-name"
            label="Category Name"
            variant="outlined"
            fullWidth
            required
            {...register("categoryName", {
              required: "Category Name is required",
            })}
            error={!!errors.categoryName}
            helperText={errors.categoryName?.message}
          />
          <TextField
            id="category-description"
            label="Category Description"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            {...register("categoryDescription", {
              required: "Category Description is required",
            })}
            error={!!errors.categoryDescription}
            helperText={errors.categoryDescription?.message}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={saveForLater}
                onChange={(e) => setSaveForLater(e.target.checked)}
              />
            }
            label="Save this category for later"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Add Category
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategory;
