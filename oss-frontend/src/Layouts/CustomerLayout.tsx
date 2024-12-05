// // Layouts/CustomerLayout.tsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import ProductDetails from "../Pages/Customer/ProductDetails";
// import MyCart from "../Pages/Customer/MyCart";
// import MyOrders from "../Pages/Customer/MyOrders";
// import DeliveryDetails from "../Pages/Customer/DeliveryDetails";
// import RegisterCustomer from "../Pages/Customer/RegisterCustomer";
// import RegistrationOTP from "../Pages/Customer/RegistrationOTP";
// import LoginForm from "../Pages/Customer/UserLogin";
// import PasswordReset from "../Pages/Customer/PasswordReset";
// import PasswordResetOTP from "../Pages/Customer/RestPasswordOTP";

// const CustomerLayout: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<RegisterCustomer />} />
//       <Route path="/registrationOTP" element={<RegistrationOTP />} />
//       <Route path="/loginForm" element={<LoginForm />} />

//       <Route path="/loginForm" element={<LoginForm />} />
//       <Route path="/passwordReset" element={<PasswordReset />} />
//       <Route path="/passwordResetOTP" element={<PasswordResetOTP />} />
//       <Route path="productDetails" element={<ProductDetails />} />
//       <Route path="myCart" element={<MyCart />} />
//       <Route path="myOrders" element={<MyOrders />} />
//       <Route path="deliveryDetails" element={<DeliveryDetails />} />
//     </Routes>
//   );
// };

// export default CustomerLayout;

import { Box } from "@mui/material";
import "../CustomerApp.css";
import { NavBar } from "../Components/NavBar";
import Sidebar from "../Components/CategoryBar.tsx";
import Background from "../Components/Background";
import RelatedProducts from "../Pages/Customer/MainPage/RelatedProducts.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "../Pages/Customer/MainPage/Category.tsx";
// import { Footer } from "../Components/Footer.tsx";
import ProductDetails from "../Pages/Customer/OrderProduct/ProductDetails.tsx";
import MyCart from "../Pages/Customer/Cart/MyCart.tsx";
import MyOrders from "../Pages/Customer/MyOrders/MyOrders.tsx";
import DeliveryDetails from "../Pages/Customer/OrderProduct/DeliveryDetails.tsx";
import RegisterCustomer from "../Pages/Customer/Login/RegisterCustomer.tsx";
import RegistrationOTP from "../Pages/Customer/Login/RegistrationOTP.tsx";
import LoginForm from "../Pages/Customer/Login/UserLogin.tsx";
import PasswordReset from "../Pages/Customer/Login/PasswordReset.tsx";
import PasswordResetOTP from "../Pages/Customer/Login/RestPasswordOTP.tsx";

function CustomerLayout() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<RegisterCustomer />} />
          <Route path="/registrationOTP" element={<RegistrationOTP />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/passwordReset" element={<PasswordReset />} />
          <Route path="/passwordResetOTP" element={<PasswordResetOTP />} />
          {/* Main Page */}
          <Route
            path="/dashboard"
            element={
              <>
                <Background />
                <Sidebar />
                <RelatedProducts />
              </>
            }
          />
          {/* Category Page */}
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="myCart" element={<MyCart />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="deliveryDetails" element={<DeliveryDetails />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default CustomerLayout;
