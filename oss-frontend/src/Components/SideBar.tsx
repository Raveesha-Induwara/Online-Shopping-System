import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Shoes",
    img: "https://img.freepik.com/free-photo/shoes_1203-8154.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    name: "Mobile",
    img: "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846501.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    name: "Laptops",
    img: "https://img.freepik.com/free-vector/realistic-display-monitor-laptop-tablet-smarphone_1017-19787.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    name: "Frocks",
    img: "https://img.freepik.com/premium-photo/blue-female-dress_692498-2219.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    name: "Tshirts",
    img: "https://img.freepik.com/premium-photo/ector-think-positive-be-positive-typography-tshirt-design_1080184-378.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
  {
    name: "Acessories",
    img: "https://img.freepik.com/premium-photo/gold-jewelry-displayed-store_674594-18761.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate("/Category");
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 2,
          textAlign: "left",
        }}
      >
        Cateogories
      </Typography>

      {/* <button onClick={handleCategoryClick}>Click Me</button> */}

      {/* <Typography variant="body1" sx={{ mb: 4, color: "gray" }}>
        Choose from a diverse menu
      </Typography> */}
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
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                mb: 1,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
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
            <Typography variant="body1" fontWeight="500">
              {category.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
