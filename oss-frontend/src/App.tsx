import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { NavBar } from "./Components/NavBar";
import { PrimaryButton } from "./Components/PrimaryButton";
import { ProductDetailsCard } from "./Components/ProductDetailsCard.tsx";
import { RelatedProductCard } from "./Components/RelatedProductCard.tsx";
import { RelatedProductList } from "./Components/RelatedProductList.tsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails.tsx";
import MyCart from "./Pages/MyCart.tsx";
import MyOrders from "./Pages/MyOrders.tsx";
import { DeliveryDetailsInputForm } from "./Components/DeliveryDetailsInputForm.tsx";

function App() {
  const [count, setCount] = useState(0);

  // const list = [
  //   {
  //     image: "././src/assets/Images/maxi1.jpg",
  //     title: "Slate Maxi - Gown",
  //     rating: 3,
  //     price: "LKR 6500",
  //   },
  //   {
  //     image: "././src/assets/Images/maxi2.jpg",
  //     title: "Slate Maxi - Gown",
  //     rating: 3,
  //     price: "LKR 6500",
  //   },
  //   {
  //     image: "././src/assets/Images/maxi3.jpg",
  //     title: "Slate Maxi - Gown",
  //     rating: 3,
  //     price: "LKR 6500",
  //   },
  // ];

  return (
    <div>
      {/* {" "}
      <NavBar />{" "} */}
      {/* <PrimaryButton title="submit" /> */}
      {/* <ProductDetailsCard
        title="Slate Maxi - Gown"
        price="LKR 6000"
        description="new frock"
        rating={3}
      /> */}
      {/* <RelatedProductCard
        image="././src/assets/Images/maxi3.jpg"
        title="Slate Maxi - Gown"
        rating={3}
        price="7500"
      /> */}
      {/* <RelatedProductList items={list} /> */}

      <DeliveryDetailsInputForm />

      <BrowserRouter>
        <Routes>
          <Route path="/productDetails" element={<ProductDetails />}></Route>
          <Route path="/myCart" element={<MyCart />}></Route>
          <Route path="/myOrders" element={<MyOrders />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
