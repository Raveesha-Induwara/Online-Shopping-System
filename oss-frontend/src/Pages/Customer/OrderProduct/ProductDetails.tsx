import { Box } from "@mui/material";
import { ProductDetailsCard } from "../../../Components/ProductDetailsCard";
import { RelatedProductList } from "../../../Components/RelatedProductList";
import { NavBar } from "../../../Components/NavBar";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100, // Ensures it stays above other components
          backgroundColor: "white", // Add a background to prevent transparency
        }}
      >
        <NavBar />
      </Box>

      <Box paddingTop={10} paddingLeft={3} paddingRight={3}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Box></Box>
          <Box
            sx={{
              width: 300, // Set the container width
              height: "auto", // Adjust the height automatically
            }}
          >
            <img
              src={location.state.imageUrl} // Replace with your image path
              alt="Description"
              style={{
                width: "100%", // Make the image fill the container
                height: "auto", // Maintain aspect ratio
              }}
            />
          </Box>
          <Box>
            <ProductDetailsCard
              id={location.state.id}
              title={location.state.name}
              price={location.state.price}
              description={location.state.description}
              rating={location.state.rate}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
          paddingTop={3}
        >
          <RelatedProductList category={location.state.category} />
        </Box>
      </Box>
    </>
  );
}
