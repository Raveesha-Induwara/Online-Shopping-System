import { Box } from "@mui/material";
import React from "react";
import { ProductDetailsCard } from "../Components/ProductDetailsCard";
import { RelatedProductList } from "../Components/RelatedProductList";
import { RelatedProductData } from "../assets/Data/RelatedProducts";
import { NavBar } from "../Components/NavBar";

const productData = RelatedProductData;

export default function ProductDetails() {
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
              src="./src/assets/Images/maxi1.jpg" // Replace with your image path
              alt="Description"
              style={{
                width: "100%", // Make the image fill the container
                height: "auto", // Maintain aspect ratio
              }}
            />
          </Box>
          <Box>
            <ProductDetailsCard
              title="Slate Maxi -Gown"
              price="LKR 6500"
              description="Perfect for casual outings or dressed up occasions"
              rating={3}
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
          <RelatedProductList items={productData} />
        </Box>
      </Box>
    </>
  );
}
