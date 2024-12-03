import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  IconButton,
  Grid,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { relatedData, Category, Product } from "../../assets/relatedProducts";

const RelatedProducts = () => {
  // Group products by category
  const groupedData = relatedData.categories.map((category: Category) => ({
    category,
    products: relatedData.products.slice(0, 5), // Fetch only 4 products per category
  }));

  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 2,
          textAlign: "left",
          marginTop: "5%",
        }}
      >
        Related Products
      </Typography>

      <Box>
        {groupedData.map((group, index) => (
          <Grid container spacing={3} sx={{ mb: 5 }} key={index}>
            {/* Category Column */}
            <Grid item xs={3}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 1,
                  textAlign: "center",
                  padding: 2,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={group.category.img}
                  alt={group.category.name}
                  sx={{ borderRadius: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {group.category.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Related Products Column */}
            <Grid item xs={9}>
              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {group.products.map(
                  (product: Product, productIndex: number) => (
                    <Card
                      key={productIndex}
                      sx={{
                        maxWidth: 200,
                        borderRadius: 2,
                        boxShadow: 3,
                        overflow: "hidden",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="210"
                        image={product.img}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography fontSize="17px" sx={{ fontWeight: "bold" }}>
                          {product.name}
                        </Typography>

                        <Rating
                          value={product.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                          sx={{ marginY: 1 }}
                        />
                        <Typography fontSize="15px" color="#8c7ae6">
                          ${product.price}
                        </Typography>
                      </CardContent>

                      {/* Add to Cart Button */}
                      <IconButton
                        color="primary"
                        aria-label="add to cart"
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          background: "#ffffff",
                          "&:hover": {
                            background: "#f0f0f0",
                          },
                        }}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Card>
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default RelatedProducts;
