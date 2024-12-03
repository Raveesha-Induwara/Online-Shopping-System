// import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";

const useStyles = makeStyles({
  SideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "20%",
    height: "100%",
    background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
    boxSizing: "border-box",
  },
  menuItem: {
    color: "rgb(43, 43, 43)",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "5% 10%",
    marginBottom: "10px",
    textDecoration: "none",
    display: "flex", // Flex layout for icon and text alignment
    alignItems: "center",
    gap: "10px", // Space between icon and text
    "&:hover": {
      backgroundColor: "rgb(43, 43, 43)", // Slight hover effect
      color: "white",
    },
  },
});

export default function SideMenu() {
  const classes = useStyles();

  return (
    <div className={classes.SideMenu}>
      <Link to="/admin/dashboard" className={classes.menuItem}>
        <DashboardIcon />
        Dashboard
      </Link>
      <Link to="/admin/users" className={classes.menuItem}>
        <GroupIcon />
        Users
      </Link>
      <Link to="/admin/products" className={classes.menuItem}>
        <InventoryIcon />
        Products
      </Link>
      <Link to="/admin/orders" className={classes.menuItem}>
        <ShoppingCartIcon />
        Orders
      </Link>
      <Link to="/admin/categories" className={classes.menuItem}>
        <CategoryIcon />
        Categories
      </Link>
    </div>
  );
}
