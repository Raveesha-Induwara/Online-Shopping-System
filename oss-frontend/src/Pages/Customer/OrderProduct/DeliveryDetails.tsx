import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Dialog,
  IconButton,
  DialogContent,
  DialogContentText,
  Divider,
} from "@mui/material";
import { PrimaryButton } from "../../../Components/PrimaryButton";
import { DeliveryDetailsInputForm } from "../../../Components/DeliveryDetailsInputForm";
import { NavBar } from "../../../Components/NavBar";
import { DeliveryData } from "../../../assets/Data/DeliveryData";
import { useLocation } from "react-router-dom";

const deliveryData = DeliveryData;

export default function DeliveryDetails() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const details = location.state || {
    address1: " ",
    address2: " ",
    city: " ",
    district: " ",
    province: " ",
  }; // Access the passed state

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigateToPayment = () => {};
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
              <IconButton
                size="small"
                color="error"
                onClick={() => handleOpen()}
              >
                Edit
              </IconButton>
              <Dialog open={open} onClose={() => handleClose()}>
                <DialogContentText>
                  <DeliveryDetailsInputForm />
                </DialogContentText>
              </Dialog>
            </Box>
            <Typography variant="body1" color="textSecondary">
              {details.address1}, {details.address2}, {details.city},
              {details.district}, {details.province}
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
                }}
              >
                <img
                  src="../../src/assets/Images/maxi1.jpg"
                  style={{ width: 150, height: 150, objectFit: "contain" }}
                />
                <Typography variant="body1" color="textSecondary">
                  {deliveryData.description}
                </Typography>
              </Box>
              <Box>LKR {deliveryData.price}</Box>
              <Box>Qty : {deliveryData.quantity}</Box>
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
              Items total (1 item)
            </Typography>
            <Typography variant="body1" color="textSecondary">
              LKR {deliveryData.price}
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
              LKR {deliveryData.deliveryFee}
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
              LKR {deliveryData.price + deliveryData.deliveryFee}
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
              onClick={async () => navigateToPayment()}
            />
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
