import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../service/api-client";

interface category {
  id: number;
  name: string;
  imageUrl: string;
}

const CategorySection = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Array<category>>([]);

  useEffect(() => {
    try {
      axios
        .get(
          "http://localhost:8083/api/v1/categories"
        )
        .then((response) => {
          setCategories(response.data);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/customer/category/${categoryName}`, {
      state: { name: categoryName },
    });
  };

  return (
    <div>
      {/* Main Category Content */}
      <Box sx={{ textAlign: "center", mt: -3 }}>
        <Grid container spacing={3} justifyContent="center">
          {categories.map((category, index) => (
            <Grid
              item
              key={index}
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
              onClick={() => handleCategoryClick(category.name)}
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
                  src={category.imageUrl}
                  alt={category.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography variant="body1" fontWeight="bold" color="black">
                {category.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default CategorySection;
