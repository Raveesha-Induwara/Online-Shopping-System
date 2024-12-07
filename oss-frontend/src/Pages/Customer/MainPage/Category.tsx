import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box,
} from "@mui/material";
import axios from "axios";

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  product_price: number;
  imagUrl: string;
  rate: number;
}

const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productData, SetProductData] = useState<Array<Product>>([]);

  // get products
  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:8083/api/v1/products/category/${location.state.name}`
        )
        .then((response) => {
          SetProductData(response.data);
        });
    } catch (error) {
      alert(error);
    }
  }, [location.state.name]);

  return (
    <Box sx={{ padding: "100px" }}>
      {/* Page Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        marginBottom="30px"
        gutterBottom
        color="black"
      >
        {location.state.name}
      </Typography>

      {/* Products */}
      <Grid container spacing={4}>
        {productData.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() =>
                navigate(`/customer/productDetails/${product.id}`, {
                  state: {
                    id: product.id,
                    name: product.product_name,
                    category: product.product_category,
                    price: product.product_price,
                    description: product.product_description,
                    rate: product.rate,
                    imageUrl: product.imagUrl,
                  },
                })
              }
            >
              <CardMedia
                component="img"
                height="250"
                content="cover"
                image={product.imagUrl}
                alt={product.product_name}
                sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
              />
              <CardContent>
                <Typography
                  fontSize="18px"
                  align="center"
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                >
                  {product.product_name}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  LKR {product.product_price.toLocaleString()}
                </Typography>
                <Rating
                  value={~~product.rate}
                  readOnly
                  precision={0.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
