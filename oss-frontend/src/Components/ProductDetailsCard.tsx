import { Box, IconButton, Paper, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface ProductDetailsCardProps {
  title: string;
  price: string;
  description: string;
  rating: number;
}

export const ProductDetailsCard = ({
  title,
  price,
  description,
  rating,
}: ProductDetailsCardProps) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const navigateToPaymentDetails = () => {
    navigate("/customer/deliveryDetails");
  };
  return (
    <Paper
      elevation={10}
      sx={{
        height: "300px",
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        background: "#185A9D",
      }}
    >
      <Box
        sx={{
          height: "20%",
          background: "#185A9D",
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFFFF",
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>

      <Box sx={{ height: "80%", width: "100%", background: "#FFFFFF" }}>
        <Box sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              color="#CA270A"
              gutterBottom
              fontWeight={700}
            >
              {price}
            </Typography>
            <IconButton onClick={() => navigate("/customer/myCart")}>
              <AddShoppingCart />
            </IconButton>
          </Box>

          <Typography variant="subtitle1" color="#201E43" fontWeight={700}>
            Description
          </Typography>
          <Typography
            variant="subtitle2"
            color="#201E43"
            fontWeight={100}
            gutterBottom
          >
            {description}
          </Typography>
          <Rating name="read-only" value={rating} readOnly size="small" />
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            marginTop={2}
          >
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    Quantity
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => count > 0 && setCount((count) => count - 1)}
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{count}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => setCount((count) => count + 1)}
                  >
                    <Add />
                  </IconButton>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2">Stock : 100</Typography>
              </Box>
            </Box>
            <Box>
              <PrimaryButton
                title="Buy now"
                onClick={async () => navigateToPaymentDetails()}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
