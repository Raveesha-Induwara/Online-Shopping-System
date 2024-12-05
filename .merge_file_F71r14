import { Box } from "@mui/material";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import Sidebar from "./Components/CategoryBar.tsx";
import Background from "./Components/Background";
import RelatedProducts from "./pages/MainPage/RelatedProducts.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/Category";
import { Footer } from "./Components/Footer.tsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
