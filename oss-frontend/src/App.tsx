import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import CustomerLayout from "./Layouts/CustomerLayout";
import ProductDetails from "./Pages/Customer/ProductDetails";
import MyCart from "./Pages/Customer/MyCart";
import MyOrders from "./Pages/Customer/MyOrders";
import DeliveryDetails from "./Pages/Customer/DeliveryDetails";
import Users from "./Pages/Admin/Users";
import Orders from "./Pages/Admin/Orders";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Admin App */}
      <Route path="/admin/*" element={<AdminLayout />} />

      {/* Customer App */}
      <Route path="/customer/*" element={<CustomerLayout />} />

      {/* Handle unmatched routes */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default App;
