import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box,
} from "@mui/material";
import { products } from "../Components/CategoryProducts.ts";

const CategoryPage: React.FC = () => {
  // const { categoryId } = useParams<{ categoryId: string }>();
  // const navigate = useNavigate();

  // // Filter products by category ID
  // const filteredProducts = products.filter(
  //   (product) => product.category.toLowerCase() === categoryId?.toLowerCase()
  // );

  return (
    <Box sx={{ padding: "100px" }}>
      {/* Page Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        marginBottom="30px"
        gutterBottom
      >
        Dresses
      </Typography>

      {/* Products */}
      <Grid container spacing={4}>
        {products
          .filter((product) => product.id === 1)
          .map((product) => (
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
              >
                <CardMedia
                  component="img"
                  height="250"
                  content="cover"
                  image={product.image}
                  alt={product.name}
                  sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                />
                <CardContent>
                  <Typography
                    fontSize="18px"
                    align="center"
                    fontWeight="bold"
                    sx={{ mb: 1 }}
                  >
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
