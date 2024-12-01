import React, { useState } from "react";
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
import { PrimaryButton } from "../Components/PrimaryButton";
import { Add, Remove, DeleteForeverOutlined } from "@mui/icons-material";
import { CartItems } from "../assets/Data/MyCartData";

const cartItems = CartItems;

export default function MyCart() {
  const [rows, setRows] = useState(cartItems);
  const [open, setOpen] = useState<null | number>(null);

  //update quantity of each product in the cart
  const updateQuantity = (id: number, increment: number) => {
    setRows((prevRows) =>
      prevRows.map((rowObj) =>
        rowObj.id === id
          ? { ...rowObj, quantity: Math.max(0, rowObj.quantity + increment) }
          : rowObj
      )
    );
    console.log("rows", rows);
  };

  const deleteProductFromCart = (id: number) => {
    setRows((prevRows) => prevRows.filter((rowObj) => rowObj.id !== id));
    handleClose();
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
              <TableRow key={row.name}>
                <TableCell>
                  <img
                    src={row.product}
                    style={{ width: 100, height: 100, objectFit: "contain" }}
                  />
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
                      onClick={() => updateQuantity(row.id, -1)}
                    >
                      <Remove />
                    </IconButton>
                    <Typography>{row.quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(row.id, 1)}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleOpen(row.id)}
                  >
                    <DeleteForeverOutlined />
                  </IconButton>
                  <Dialog open={open === row.id} onClose={() => handleClose()}>
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
                        onClick={() => deleteProductFromCart(row.id)}
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
            <Typography variant="h6">
              Total: LKR <strong>{calculateTotal()}</strong>
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClose()}
          >
            <strong>Checkout ({rows.length})</strong>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
