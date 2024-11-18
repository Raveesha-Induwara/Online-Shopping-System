import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { RelatedProductCard } from "./RelatedProductCard";
import { RelatedProductData } from "../assets/Data/RelatedProducts";

interface RelatedProductListProps {
  items: { image: string; title: string; rating: number; price: string }[];
}

export const RelatedProductList = ({ items }: RelatedProductListProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          sx={{ color: "text.secondary" }}
          gutterBottom
        >
          Related Products :
        </Typography>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          {items.map((item) => (
            <RelatedProductCard
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};
