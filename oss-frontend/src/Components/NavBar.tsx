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
} from "@mui/material";
import {
  AccountCircle,
  CatchingPokemon,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [text, setText] = useState("");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)" }}
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
              onClick={() => navigate("/customer/myCart")}
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
              <MenuItem onClick={() => {}}>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/customer/myOrders");
                }}
              >
                My orders
              </MenuItem>
              <MenuItem onClick={() => {}}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
