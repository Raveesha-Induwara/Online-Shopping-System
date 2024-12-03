// Layouts/CustomerLayout.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Pages/Customer/ProductDetails";
import MyCart from "../Pages/Customer/MyCart";
import MyOrders from "../Pages/Customer/MyOrders";
import DeliveryDetails from "../Pages/Customer/DeliveryDetails";

const CustomerLayout: React.FC = () => {
  return (
    <Routes>
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="myCart" element={<MyCart />} />
      <Route path="myOrders" element={<MyOrders />} />
      <Route path="deliveryDetails" element={<DeliveryDetails />} />
    </Routes>
  );
};

export default CustomerLayout;
