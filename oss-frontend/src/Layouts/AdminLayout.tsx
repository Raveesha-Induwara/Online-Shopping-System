// // Layouts/AdminLayout.tsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import SideMenu from "../Components/SideMenu";
// import Header from "../Components/Header";
// import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// import Orders from "../Pages/Admin/Orders";
// import Users from "../Pages/Admin/Users";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#333996", light: "#3c44b126" },
//     secondary: { main: "#f83245", light: "#f8324526" },
//     background: { default: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)" },
//   },
//   shape: { borderRadius: 12 },
// });

// const AdminLayout: React.FC = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <SideMenu />
//       <div style={{ paddingLeft: "20%", width: "100%" }}>
//         <Header />
//         <Routes>
//           <Route path="dashboard" element={<div>Dashboard Page</div>} />
//           <Route path="users" element={<Users />} />
//           <Route path="products" element={<div>Products Page</div>} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="categories" element={<div>Categories Page</div>} />
//         </Routes>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default AdminLayout;

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { AppLayout } from "../Components/AppLayout";
// import "../App.css";

// function App() {
//   return (
//     <Router>
//       <div className="OuterDiv">
//         <AppLayout />
//         <footer className="footer">
//           <p>&copy; 2024 My App. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

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
// import DashboardPage from "../pages/Dashboard/Dashboard";
import Users from "../Pages/Users/Users";
import Orders from "../Pages/Orders/Orders";
// import ProductsPage from "../pages/Products/Products";
// import OrdersPage from "../pages/Orders/Orders";
import CategoriesContent from "../Pages/Categories/Categories";

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

  // Determine the current selected item's name based on the location
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
          {sidebarItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                "&:hover": { backgroundColor: "#ffffff55" },
                backgroundColor:
                  location.pathname === item.path ? "#ffffff33" : "transparent",
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
        <Box sx={{ padding: 3 }}>
          <Routes>
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
            <Route path="/users" element={<Users />} />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/categories" element={<CategoriesContent />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
