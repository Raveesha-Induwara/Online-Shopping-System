import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RelatedProductCard } from "./RelatedProductCard";
import axios from "axios";

interface RelatedProductListProps {
  category: string;
}

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  imagUrl: string;
  product_price: number;
  rate: 0;
}

export const RelatedProductList = ({ category }: RelatedProductListProps) => {
  const [relatedProducts, setRelatedProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8083/api/v1/products/category/${category}`)
        .then((response) => {
          setRelatedProducts(response.data);
          console.log(response.data);
        });
    } catch (error) {
      alert(error);
    }
  }, [category]);
  
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
          {relatedProducts.map((item) => (
            <RelatedProductCard
              id={item.id}
              imagUrl={item.imagUrl}
              name={item.product_name}
              description={item.product_description}
              category={item.product_category}
              rate={item.rate}
              price={item.product_price}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};
