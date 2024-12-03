import React from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";
import { products } from "../Components/CategoryProducts.ts";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
}

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  //filter products
  const filteredProducts = products.filter(
    (product: Product) =>
      product.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {categoryName} Products
      </Typography>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {product.name}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  LKR {product.price.toLocaleString()}
                </Typography>
                <Rating
                  value={product.rating}
                  readOnly
                  precision={0.5}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryPage;
