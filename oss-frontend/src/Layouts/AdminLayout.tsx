import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
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
  ShoppingCart,
  Dashboard,
  People,
  Category,
  LocalMall,
} from "@mui/icons-material";
// Component imports
import Users from "../Pages/Admin/Users/Users";
import Orders from "../Pages/Admin/Orders/Orders";
import CategoriesContent from "../Pages/Admin/Categories/Categories";
import ProductsContent from "../Pages/Admin/Products/Products";
import AdminDashboard from "../Pages/Admin/Dashboard/AdminDashboard";
import "../AdminApp.css";

const AppLayout = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();

  // Sidebar items and paths
  const sidebarItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
    { text: "Users", icon: <People />, path: "/admin/users" },
    { text: "Products", icon: <LocalMall />, path: "/admin/products" },
    { text: "Orders", icon: <ShoppingCart />, path: "/admin/orders" },
    { text: "Categories", icon: <Category />, path: "/admin/categories" },
  ];

  // Get current selected item
  const currentItem =
    sidebarItems.find((item) => item.path === location.pathname)?.text ||
    "App Layout";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="OuterDiv">
      {/* Sidebar and content container */}
      <Box sx={{ display: "flex", width: "100%" }}>
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
            {sidebarItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  "&:hover": { backgroundColor: "#ffffff55" },
                  backgroundColor:
                    location.pathname === item.path
                      ? "#ffffff33"
                      : "transparent",
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={item.text} />
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
                {currentItem}
              </Typography>
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
          <Box className="content">
            <Routes>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<ProductsContent />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/categories" element={<CategoriesContent />} />
            </Routes>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box className="footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </Box>
    </div>
  );
};

export default AppLayout;
