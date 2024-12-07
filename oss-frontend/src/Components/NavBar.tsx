import React, {useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import {
  AccountCircle,
  CatchingPokemon,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface UserProfile {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  address: string;
  gender: string;
  dateOfBirth: string;
}

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");
  const cartItemCount = localStorage.getItem("cartItemCount");
  const [userProfile, setUserProfile] = useState<UserProfile>({
    customerId: "1",
    firstName: "Anne",
    lastName: "Turing",
    email: "anne.turing@gmail.com",
    mobileNo: "725-528-458",
    address: "123 Main St Anytown",
    dateOfBirth: "1994-06-23",
    gender: "Female",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenProfile = () => {
    setOpen(true);
    try {
        axios
          .get("http://localhost:8082/api/v1/customers/getuser", {
            params: {
              email: userEmail,
            },
          })
          .then((response) => {
            setUserProfile(response.data);
          });
      } catch (error) {
        alert(error);
      }
  };

  const handleCloseProfile = () => {
    setOpen(false);
  };

  const toggleEditMode = () => {
    if (editMode == true) {
      try {
        axios
          .patch(
            "http://localhost:8082/api/v1/customers/updateuser",
            {
              customerId: userProfile.customerId,
              firstName: userProfile.firstName,
              lastName: userProfile.lastName,
              email: userProfile.email,
              mobileNo: userProfile.mobileNo,
              address: userProfile.address,
              gender: userProfile.gender,
              dateOfBirth: userProfile.dateOfBirth,
            }
          )
          .then((response) => {
            setUserProfile(response.data);
            // handleCloseProfile();
          });
      } catch (error) {
        alert(error);
      }
    }
    setEditMode(!editMode);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
        width: "100%",
        top: 0,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="div">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => navigate("/customer/dashboard")}
            >
              <CatchingPokemon />
            </IconButton>
          </Box>
          <Box
            component="div"
            sx={{
              background: "white",
              position: "relative",
              marginLeft: 0,
              flexGrow: 0.125,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <InputBase
              placeholder="Search here…"
              inputProps={{ "aria-label": "search" }}
              sx={{ px: 1 }}
              onChange={(e) => setText(e.target.value)}
            />
            <Box sx={{ background: "#185A9D" }}>
              <IconButton onClick={() => console.log("New Text", text)}>
                <Search sx={{ color: "darkgray" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 3 }}
              onClick={() => navigate("/customer/myCart")}
            >
              <Badge badgeContent={parseInt(cartItemCount)} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/customer/myOrders");
                }}
              >
                My orders
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/customer/loginForm");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
            <Dialog
              open={open}
              onClose={handleCloseProfile}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle sx={{ textAlign: "center" }}>My Profile</DialogTitle>
              <DialogContent>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      margin: "0 auto",
                      mb: 1,
                    }}
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Typography variant="h6">
                    {userProfile.firstName} {userProfile.lastName}
                  </Typography>
                </Box>
                <Divider />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <TextField
                      label="First Name"
                      name="firstName"
                      value={userProfile.firstName}
                      onChange={handleInputChange}
                      InputProps={{ readOnly: !editMode }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={userProfile.lastName}
                      onChange={handleInputChange}
                      InputProps={{ readOnly: !editMode }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      name="email"
                      value={userProfile.email}
                      onChange={handleInputChange}
                      InputProps={{ readOnly: !editMode }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={userProfile.mobileNo}
                      onChange={handleInputChange}
                      InputProps={{ readOnly: !editMode }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Gender"
                      name="gender"
                      value={userProfile.gender}
                      onChange={handleInputChange}
                      InputProps={{ readOnly: !editMode }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      name="address"
                      value={userProfile.address}
                      onChange={handleInputChange}
                      InputProps={{ readOnly: !editMode }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date of Birth"
                      name="dateOfBirth"
                      value={userProfile.dateOfBirth}
                      onChange={handleInputChange}
                      InputProps={{ readOnly: !editMode }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={toggleEditMode}>
                  {editMode ? "Save" : "Edit"}
                </Button>
                <Button onClick={handleCloseProfile}>Close</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
