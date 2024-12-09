import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  // Dialog,
  // IconButton,
  // DialogContentText,
  Divider,
} from "@mui/material";
import { PrimaryButton } from "../../../Components/PrimaryButton";
// import { DeliveryDetailsInputForm } from "../../../Components/DeliveryDetailsInputForm";
import { NavBar } from "../../../Components/NavBar";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  imagUrl: string;
  product_price: number;
  rate: 0;
}
interface User {
  customerId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNo: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  imageUrl: string;
}

export default function DeliveryDetails() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { productId, quantity } = location.state;
  const [productData, SetProductData] = useState<Product>();
  const [userDetails, setUserDetails] = useState<User>();
  const totalAmount = productData?.product_price * quantity + 300;
  const userId = localStorage.getItem("userId");
  const userEmail = localStorage.getItem("userEmail");
  const [paymentUrl, setPaymentUrl] = useState<string>();

  // Access the passed state
  // const details = location.state || {
  //   address1: " ",
  //   address2: " ",
  //   city: " ",
  //   district: " ",
  //   province: " ",
  // }; // Access the passed state

  // get products details
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8083/api/v1/products/${productId}`)
        .then((response) => {
          SetProductData(response.data);
        });
    } catch (error) {
      alert(error);
    }
  }, [productId]);

  // get user details
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8082/api/v1/customers/getuser`, {
          params: {
            email: userEmail,
          },
        })
        .then((response) => {
          setUserDetails(response.data);
        });
    } catch (error) {
      alert(error);
    }
  }, [userEmail]);

  const AddItemToCart = async (
    userId: string | null,
    productId: number | undefined,
    name: string | undefined,
    description: string | undefined,
    price: number | undefined,
    quantity: number | undefined
  ) => {
    try {
      await axios.post(`http://localhost:8087/api/v1/carts/addItem`, {
        userId,
        productId,
        name,
        description,
        price,
        quantity,
      });
        placeOrder(totalAmount);
    } catch (error) {
      alert(`Error adding item to cart: ${error}`);
    }
  };

  // navigate to payment
  const placeOrder = (amount: number) => {
    axios
      .post(`http://localhost:8085/api/v1/orders`, {
        userId: userId,
        totalAmount: amount,
      })
      .then((response) => {
        console.log("Order placed", response.data);
        setPaymentUrl(response.data.data.payment_url);
        window.location.href = response.data.data.payment_url;
      });
  };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: "white",
        }}
      >
        <NavBar />
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Paper
            elevation={1}
            sx={{
              height: {
                xs: "auto",
                sm: "auto",
              },
              width: {
                xs: "90vw",
                sm: "700px",
              },
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
              padding: 2,
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                color="textSecondary"
                gutterBottom
                fontWeight={550}
              >
                Shipping and Billing
              </Typography>
              {/* <IconButton
                size="small"
                color="error"
                onClick={() => handleOpen()}
              >
                Edit
              </IconButton> */}
              {/* <Dialog open={open} onClose={() => handleClose()}>
                <DialogContentText>
                  <DeliveryDetailsInputForm
                    closeDialog={() => setOpen(false)}
                  />
                </DialogContentText>
              </Dialog> */}
            </Box>
            <Typography variant="body1" color="textSecondary">
              {userDetails?.address}
            </Typography>
          </Paper>

          <Paper
            elevation={1}
            sx={{
              width: {
                xs: "90vw",
                sm: "700px",
              },
              background: "#FFFFFF",
              padding: 2,
              gap: 1,
              minHeight: "auto",
            }}
          >
            <Typography
              variant="h6"
              color="textSecondary"
              gutterBottom
              fontWeight={550}
            >
              Order Details
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  gap: 2,
                }}
              >
                <img
                  src={productData?.imagUrl}
                  style={{ width: 150, height: 150, objectFit: "contain" }}
                />
                <Typography variant="body1" color="textSecondary">
                  {productData?.product_description}
                </Typography>
              </Box>
              <Box>LKR {productData?.product_price}</Box>
              <Box>Qty : {quantity}</Box>
            </Box>
          </Paper>
        </Box>
        <Paper
          elevation={1}
          sx={{
            width: {
              xs: "90vw",
              sm: "500px",
            },
            background: "#FFFFFF",
            padding: 2,
            gap: 2,
            minHeight: "auto",
          }}
        >
          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom
            fontWeight={550}
          >
            Order Summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
              paddingBottom: 3,
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Items total ({quantity} item)
            </Typography>
            <Typography variant="body1" color="textSecondary">
              LKR {productData?.product_price * quantity}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
              paddingBottom: 3,
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Delivery Fee
            </Typography>
            <Typography variant="body1" color="textSecondary">
              LKR 300
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
              paddingTop: 3,
            }}
          >
            <Typography variant="body1" color="textSecondary" fontWeight={600}>
              Total :
            </Typography>
            <Typography variant="body1" color="error">
              LKR {totalAmount}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              paddingTop: 3,
              justifyContent: "flex-end",
            }}
          >
            <PrimaryButton
              title="Proceed to pay"
              onClick={async () => {
                AddItemToCart(
                  userId,
                  productId,
                  productData?.product_name,
                  productData?.product_description,
                  totalAmount,
                  quantity
                );
              }}
            />
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
