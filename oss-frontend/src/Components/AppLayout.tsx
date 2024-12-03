import React, { useState } from "react";
import CategoriesContent from "../pages/Categories/Categories";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  // Badge,
  // InputBase,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  // CatchingPokemon,
  // Search,
  ShoppingCart,
  Dashboard,
  People,
  Category,
  LocalMall,
} from "@mui/icons-material";

export const AppLayout = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

  const sidebarItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Users", icon: <People /> },
    { text: "Products", icon: <LocalMall /> },
    { text: "Orders", icon: <ShoppingCart /> },
    { text: "Categories", icon: <Category />, selected: true },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            background: "linear-gradient(to bottom, #185A9D, #43CEA2)",
            color: "white",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Online Shopping
          </Typography>
        </Toolbar>
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem
              button
              key={item.text}
              sx={{
                backgroundColor: item.selected ? "#ffffff33" : "transparent",
                "&:hover": { backgroundColor: "#ffffff55" },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Title Bar */}
        <AppBar
          position="static"
          sx={{
            background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Categories
            </Typography>
            {/* <Box
              component="div"
              sx={{
                background: "white",
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 1,
              }}
            >
              <InputBase
                placeholder="Enter category..."
                inputProps={{ "aria-label": "search" }}
                sx={{ px: 1 }}
                onChange={onChangeText}
              />
              <IconButton onClick={() => console.log("New Text", text)}>
                <Search sx={{ color: "darkgray" }} />
              </IconButton>
            </Box> */}
            {/* <IconButton
              size="large"
              color="inherit"
              aria-label="cart"
              sx={{ ml: 2 }}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              color="inherit"
              aria-label="account"
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
              <MenuItem onClick={() => {}}>My orders</MenuItem>
              <MenuItem onClick={() => {}}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="body1">
              <CategoriesContent />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
