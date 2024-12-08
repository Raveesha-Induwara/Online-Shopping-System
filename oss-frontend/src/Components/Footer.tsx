import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #185A9D 5%, #43CEA2 95%)",
        color: "white",
        padding: "30px 300px",
        textAlign: "Justify",
      }}
    >
      <Grid container spacing={10}>
        {/* About Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            ABOUT
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
          FlowMart, your one-stop online marketplace for a seamless shopping experience.
          Our platform is designed with user-friendliness and efficiency in mind, making it easy for customers to
           explore and purchase their favorite items from the comfort of their homes.
          </Typography>
          <Box>
            <img
              src="/footer.png"
              alt="Payment Methods"
              style={{ width: "300px" }}
            />
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} textAlign={"right"}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1, textAlign:"right" }}>
            CONTACT
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            No.12, Colombo 07, Srilanka
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Pin code - 110005
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            +91 123456789
          </Typography>
          <Box sx={{ marginTop: 2 }}>
           
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "0.9rem",
          color: "black",
        }}
      >
        Copyright &copy; 2024 All rights reserved | Design by Flow Mart
      </Typography>
    </Box>
  );
};
