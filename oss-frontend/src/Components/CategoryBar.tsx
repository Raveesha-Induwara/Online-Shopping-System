import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { categories } from "./CategoryBar"; // Adjust the path as needed

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <Box sx={{ textAlign: "center", mt: -5 }}>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category) => (
          <Grid
            item
            key={category.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleCategoryClick(category.id)}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                mb: 1,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                border: "7.5px solid #1289A7",
              }}
            >
              <img
                src={category.category_image}
                alt={category.category_name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="body1" fontWeight="bold">
              {category.category_name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
