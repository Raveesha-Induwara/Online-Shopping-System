// Layouts/AdminLayout.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Orders from "../Pages/Admin/Orders";
import Users from "../Pages/Admin/Users";

const theme = createTheme({
  palette: {
    primary: { main: "#333996", light: "#3c44b126" },
    secondary: { main: "#f83245", light: "#f8324526" },
    background: { default: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)" },
  },
  shape: { borderRadius: 12 },
});

const AdminLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideMenu />
      <div style={{ paddingLeft: "20%", width: "100%" }}>
        <Header />
        <Routes>
          <Route path="dashboard" element={<div>Dashboard Page</div>} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<div>Products Page</div>} />
          <Route path="orders" element={<Orders />} />
          <Route path="categories" element={<div>Categories Page</div>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default AdminLayout;
