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
  Alert,
  AlertTitle,
} from "@mui/material";
import { PrimaryButton } from "../Components/PrimaryButton";
import { Add, Remove, DeleteForeverOutlined } from "@mui/icons-material";
import { strict } from "assert";

function createData(
  id: number,
  product: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  status: string,
  orderDate: string
) {
  return { id, product, name, description, price, quantity, status, orderDate };
}

const initialRows = [
  createData(
    1,
    "././src/assets/Images/maxi3.jpg",
    "Slate Maxi - Gown",
    "Slate Maxi - Gown",
    6000,
    1,
    "Delivered",
    "25/11/2024"
  ),
  createData(
    2,
    "././src/assets/Images/maxi2.jpg",
    "Slate Maxi - Gown2",
    "Slate Maxi - Gown2",
    5000,
    3,
    "Dispatched",
    "22/11/2024"
  ),
  createData(
    3,
    "././src/assets/Images/maxi1.jpg",
    "Slate Maxi - Gown3",
    "Slate Maxi - Gown3",
    7000,
    5,
    "Delivered",
    "20/11/2024"
  ),
];

export default function MyOrders() {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState<null | number>(null);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: "#185A9D", color: "white" }}>
            <TableRow>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Order ID
              </TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Product
              </TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Description
              </TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Status
              </TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Price
              </TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Quantity
              </TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>
                Order Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ textAlign: "center" }}>{row.id}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <img
                    src={row.product}
                    style={{ width: 100, height: 100, objectFit: "contain" }}
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{row.name}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.description}
                </TableCell>
                <TableCell sx={{ width: 3 }}>
                  <Alert
                    severity={
                      row.status === "Delivered" ? "success" : "warning"
                    }
                    icon={false}
                  >
                    <AlertTitle>{row.status}</AlertTitle>
                  </Alert>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  LKR {row.price}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.quantity}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.orderDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
