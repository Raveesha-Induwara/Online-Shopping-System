// Layouts/CustomerLayout.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Pages/Customer/ProductDetails";
import MyCart from "../Pages/Customer/MyCart";
import MyOrders from "../Pages/Customer/MyOrders";
import DeliveryDetails from "../Pages/Customer/DeliveryDetails";
import RegisterCustomer from "../Pages/Customer/RegisterCustomer";
import RegistrationOTP from "../Pages/Customer/RegistrationOTP";
import LoginForm from "../Pages/Customer/UserLogin";
import PasswordReset from "../Pages/Customer/PasswordReset";
import PasswordResetOTP from "../Pages/Customer/RestPasswordOTP";

const CustomerLayout: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterCustomer />} />
      <Route path="/registrationOTP" element={<RegistrationOTP />} />
      <Route path="/loginForm" element={<LoginForm />} />

      <Route path="/loginForm" element={<LoginForm />} />
      <Route path="/passwordReset" element={<PasswordReset />} />
      <Route path="/passwordResetOTP" element={<PasswordResetOTP />} />
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="myCart" element={<MyCart />} />
      <Route path="myOrders" element={<MyOrders />} />
      <Route path="deliveryDetails" element={<DeliveryDetails />} />
    </Routes>
  );
};

export default CustomerLayout;
