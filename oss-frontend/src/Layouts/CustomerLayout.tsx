import "../CustomerApp.css";
import { NavBar } from "../Components/NavBar";
import Sidebar from "../Components/CategoryBar.tsx";
import Background from "../Components/Background/Background.tsx";
import RelatedProducts from "../Pages/Customer/MainPage/RelatedProducts.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "../Pages/Customer/MainPage/Category.tsx";
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
          <Route path="/category/:name" element={<CategoryPage />} />
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
