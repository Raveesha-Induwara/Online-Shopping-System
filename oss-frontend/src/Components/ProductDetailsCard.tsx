import { Box, IconButton, Paper, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ProductDetailsCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
}

export const ProductDetailsCard = ({
  id,
  title,
  price,
  description,
  rating,
}: ProductDetailsCardProps) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(0);
  const userId = localStorage.getItem("userId");

  // get categories
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8086/api/v1/inventory/getinventory/${id}`)
        .then((response) => {
          setStock(response.data.quantity);
        });
    } catch (error) {
      alert(error);
    }
  }, [id]);

  const navigateToPaymentDetails = () => {
    navigate("/customer/deliveryDetails", {
      state: { productId: id, quantity: count },
    });
  };

  const AddItemToCart = (
    userId: string | null,
    productId: number,
    name: string,
    description: string,
    price: number,
    quantity: number
  ) => {
    try {
      axios.post(`http://localhost:8087/api/v1/carts/addItem`, {
        userId,
        productId,
        name,
        description,
        price,
        quantity,
      });
    } catch (error) {
      alert(`Error adding item to cart: ${error}`);
    }
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
            <IconButton onClick={() => AddItemToCart(userId, id, title, description, price, count)}>
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
                {/* Stock */}
                {stock > 0 ? (
                  <Typography variant="body2">Stock : {stock}</Typography>
                ) : (
                  <Typography variant="body2" sx={{ color: "red" }}>
                    Out of stock
                  </Typography>
                )}
              </Box>
            </Box>
            <Box>
              <PrimaryButton
                title="Buy now"
                isDisabled={count === 0 || stock === 0 ? true : false}
                onClick={() => navigateToPaymentDetails()}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
