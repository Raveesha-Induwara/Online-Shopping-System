import React, { useState } from "react";
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
} from "@mui/material";
import {
  AccountCircle,
  CatchingPokemon,
  Search,
  ShoppingCart,
} from "@mui/icons-material";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: string;
}

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    firstName: "Andrew",
    lastName: "Turing",
    email: "andrew.turing@cryptographyinc.com",
    phone: "555-237-2384",
    address: "123 Main St, Anytown USA",
    dateOfBirth: "1912-06-23",
    gender: "Male",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenProfile = () => {
    setOpen(true);
  };

  const handleCloseProfile = () => {
    setOpen(false);
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
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
              onChange={onChangeText}
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
            >
              <Badge badgeContent={4} color="error">
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
              <MenuItem onClick={() => {}}>My orders</MenuItem>
              <MenuItem onClick={() => {}}>Logout</MenuItem>
            </Menu>
            <Dialog
              open={open}
              onClose={handleCloseProfile}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>My Profile</DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
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
                <Button onClick={handleCloseProfile}>Close</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
