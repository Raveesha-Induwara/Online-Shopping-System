import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { Add, Remove, DeleteForeverOutlined } from "@mui/icons-material";
import { NavBar } from "../../../Components/NavBar";
import axios from "axios";

interface Cart {
  productId: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export default function MyCart() {
  const [rows, setRows] = useState<Array<Cart>>([]);
  const [open, setOpen] = useState<null | number>(null);
  const userId = localStorage.getItem("userId");
  const [paymentUrl, setPaymentUrl] = useState<string>(); 
  localStorage.setItem("cartItemCount", rows.length.toString());

  // get cart data
  useEffect(() => {
    axios
      .get(`http://localhost:8087/api/v1/carts/getCart/${userId}`)
      .then((response) => {
        setRows(response.data);
      });
  }, [userId]);

  // update quantity of each product in the cart
  const updateQuantity = (id: number, quantity: number) => {
    axios
      .patch(`http://localhost:8087/api/v1/carts/updateQuantity`, {
        userId: userId,
        productId: id,
        quantity: quantity,
      })
      .then((response) => {
        console.log("Quantity updated", response.data);
        axios
          .get(`http://localhost:8087/api/v1/carts/getCart/${userId}`)
          .then((response) => {
            setRows(response.data);
          });
      });
  };

  const deleteProductFromCart = (id: number) => {
    axios
      .delete(`http://localhost:8087/api/v1/carts/delete/${userId}/${id}`)
      .then((response) => {
        console.log("Item deleted from cart", response.data);
        axios
          .get(`http://localhost:8087/api/v1/carts/getCart/${userId}`)
          .then((response) => {
            setRows(response.data);
          });
      });
    handleClose();
  };

  const placeOrder = () => {
    axios
      .post(`http://localhost:8085/api/v1/orders`, {
        userId: userId,
        totalAmount: calculateTotal(),
      })
      .then((response) => {
        console.log("Order placed", response.data);
        setPaymentUrl(response.data.data.payment_url);
        window.location.href = response.data.data.payment_url;
      });
  };

  const handleOpen = (id: number) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const calculateTotal = () => {
    return rows.reduce((total, row) => {
      const price = Number(row.price);
      const quantity = Number(row.quantity);

      return total + price * quantity;
    }, 0);
  };

  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: "white",
          paddingLeft: 1,
          paddingRight: 1,
        }}
      >
        <NavBar />
      </Box>
      <Box sx={{ paddingTop: 10, paddingLeft: 2, paddingRight: 2 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ background: "#185A9D", color: "white" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Product</TableCell>
                <TableCell sx={{ color: "white" }}>Name</TableCell>
                <TableCell sx={{ color: "white" }}>Description</TableCell>
                <TableCell sx={{ color: "white" }}>Quantity</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.productId}>
                  <TableCell>
                    {/* <img
                      src={row.name}
                      style={{ width: 100, height: 100, objectFit: "contain" }}
                    /> */}
                    {row.productId}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        flexGrow: 1,
                        flexDirection: "row",
                        // justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() =>
                          updateQuantity(row.productId, row.quantity - 1)
                        }
                      >
                        <Remove />
                      </IconButton>
                      <Typography>{row.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() =>
                          updateQuantity(row.productId, row.quantity + 1)
                        }
                      >
                        <Add />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleOpen(row.productId)}
                    >
                      <DeleteForeverOutlined />
                    </IconButton>
                    <Dialog
                      open={open === row.productId}
                      onClose={() => handleClose()}
                    >
                      <DialogTitle>
                        {"You are about to delete an item"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Are you sure you want to delete this item?
                        </DialogContentText>
                      </DialogContent>

                      <DialogActions>
                        <Button
                          variant="outlined"
                          onClick={() => deleteProductFromCart(row.productId)}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleClose()}
                        >
                          Cancel
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ marginTop: 2, textAlign: "right", paddingRight: 2 }}>
              <Typography variant="h6" color="black">
                Total: LKR <strong>{calculateTotal()}</strong>
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="error"
              onClick={() => placeOrder()}
            >
              <strong>Checkout ({rows.length})</strong>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
