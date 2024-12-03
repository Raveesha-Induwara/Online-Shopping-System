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
      <Grid container spacing={50}>
        {/* About Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            ABOUT
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box>
            <img
              src="../../public/pngkey.com-payment-methods-png-3987066.png"
              alt="Payment Methods"
              style={{ width: "300px" }}
            />
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            CONTACT
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            XYZ, New Delhi, India
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Pin code - 110005
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            +91 123456789
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            {/* Social Media Icons */}
            <a href="#" style={{ marginRight: 10, color: "white" }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={{ marginRight: 10, color: "white" }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={{ marginRight: 10, color: "white" }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fab fa-youtube"></i>
            </a>
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
        Copyright &copy; 2024 All rights reserved | Design by UI DEV
      </Typography>
    </Box>
  );
};
