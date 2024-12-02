import "./App.css";
import SideMenu from "./Components/SideMenu";
import { makeStyles } from "@mui/styles";
import Header from "./Components/Header";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Orders from "./Pages/Orders";
import { Routes, Route, useLocation } from "react-router-dom";
import Users from "./Pages/Users";
import React from "react";
import ProductDetails from "./Pages/ProductDetails.tsx";
import MyCart from "./Pages/MyCart.tsx";
import MyOrders from "./Pages/MyOrders.tsx";
import DeliveryDetails from "./Pages/DeliveryDetails.tsx";

// Define Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Define custom styles for the nav bar
const useStyles = makeStyles(() => ({
  appMain: {
    paddingLeft: "20%",
    width: "100%",
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();

  // Define routes that should not use the theme
  const excludedRoutes = [
    "/productDetails",
    "/myCart",
    "/myOrders",
    "/deliveryDetails",
  ];

  const isThemed = !excludedRoutes.includes(location.pathname);

  return (
    <>
      {isThemed ? (
        <ThemeProvider theme={theme}>
          <SideMenu />
          <div className={classes.appMain}>
            <Header />
            <Routes>
              <Route path="/dashboard" element={<div>Dashboard Page</div>} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<div>Products Page</div>} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/categories" element={<div>Categories Page</div>} />
            </Routes>
            <CssBaseline />
          </div>
        </ThemeProvider>
      ) : null}
      <Routes>
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/deliveryDetails" element={<DeliveryDetails />} />
      </Routes>
    </>
  );
};

export default App;
