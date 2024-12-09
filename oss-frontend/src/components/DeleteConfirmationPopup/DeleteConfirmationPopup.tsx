import React from "react";
import "./DeleteConfirmationPopup.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface DeleteConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="delete-confirmation-popup">
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this product?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} variant="contained" color="primary">
          Yes
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationPopup;
