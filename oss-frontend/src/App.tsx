import { Box } from "@mui/material";
import "./App.css";
import { NavBar } from "./Components/NavBar";
//import ProductDisplay from './Components/ProductDisplay'
import Sidebar from "./Components/SideBar";
import Background from "./Components/Background";
import RelatedProducts from "./pages/MainPage/RelatedProducts.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category } from "@mui/icons-material";

function App() {
  return (
    <>
      <Router>
        <div>
          <Box>
            <NavBar />

            <Background></Background>
            <Sidebar />
            {/* <hr className="line-mainpage"></hr> */}
            <RelatedProducts />

            <Routes>
              <Route path="/Category" element={<Category />} />
            </Routes>
          </Box>
        </div>
      </Router>
    </>
  );
}

export default App;
