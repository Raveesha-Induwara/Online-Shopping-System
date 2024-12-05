import { Box, Typography, Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Shoes",
    img: "https://img.freepik.com/free-photo/shoes_1203-8154.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Mobile",
    img: "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846501.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Laptops",
    img: "https://img.freepik.com/free-vector/realistic-display-monitor-laptop-tablet-smarphone_1017-19787.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Frocks",
    img: "https://img.freepik.com/premium-photo/blue-female-dress_692498-2219.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Tshirts",
    img: "https://img.freepik.com/premium-photo/ector-think-positive-be-positive-typography-tshirt-design_1080184-378.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Accessories",
    img: "https://img.freepik.com/premium-photo/gold-jewelry-displayed-store_674594-18761.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/customer/category/${categoryId}`);
  };

  return (
    <div>
      {/* Main Category Content */}
      <Box sx={{ textAlign: "center", mt: 1 }}>
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
                  src={category.img}
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
