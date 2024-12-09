import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Avatar,
  IconButton,
} from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";

interface UserProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  profilePicture?: string;
}

export const UserProfile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfileProps>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-1234-5678",
    address: "123 Main St, Anytown USA",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    profilePicture: "/images/profile.jpg",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProfilePicture = () => {
    // Add logic to handle profile picture upload
  };

  const handleRemoveProfilePicture = () => {
    // Add logic to handle profile picture removal
  };

  return (
    <>
      <Button onClick={handleOpen}>View Profile</Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>My Profile</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {userProfile.profilePicture ? (
                <Box sx={{ position: "relative" }}>
                  <Avatar
                    src={userProfile.profilePicture}
                    alt="Profile Picture"
                    sx={{ width: 100, height: 100 }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="remove profile picture"
                    onClick={handleRemoveProfilePicture}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <AddAPhoto />
                  </IconButton>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddAPhoto />}
                  onClick={handleAddProfilePicture}
                >
                  Add Profile Picture
                </Button>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                value={userProfile.firstName}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                value={userProfile.lastName}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                value={userProfile.email}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                value={userProfile.phone}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                value={userProfile.address}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date of Birth"
                value={userProfile.dateOfBirth}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Gender"
                value={userProfile.gender}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
