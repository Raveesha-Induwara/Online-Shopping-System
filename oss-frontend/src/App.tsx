{/*import "./App.css";
import SideMenu from "./components/SideMenu";
import { makeStyles } from "@mui/styles";
import Header from "./components/Header";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Orders from "./pages/Orders";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import React from "react";

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
    borderRadius: 12, // Material-UI expects a number, not a string
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

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/orders" element={<Orders />} /> {/* Orders Page */}
          //<Route path="/categories" element={<div>Categories Page</div>} />
       // </Routes>
      //  <CssBaseline />
    //  </div>
   // </ThemeProvider>
  //);
//};
// <Route path="/products" element={<Products/>} />
//export default App;


import { AppLayout } from './components/AppLayout';
import ProductsContent from './pages/Products/Products';  
import './App.css';

function App() {
  return (
    <>
      <div className="OuterDiv">

       <AppLayout>
         <ProductsContent/>
        </AppLayout>

        <div className="content">
          
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;



