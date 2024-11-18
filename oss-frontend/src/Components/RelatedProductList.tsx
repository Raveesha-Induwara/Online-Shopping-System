import { Stack } from "@mui/material";
import React, { ReactNode } from "react";
import { RelatedProductCard } from "./RelatedProductCard";

interface RelatedProductListProps {
  items: { image: string; title: string; rating: number; price: string }[];
}

export const RelatedProductList = ({ items }: RelatedProductListProps) => {
  return (
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
  );
};
