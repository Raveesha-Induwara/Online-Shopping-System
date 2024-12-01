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
import { MyOrdersData } from "../assets/Data/MyOrdersData";

const myOrders = MyOrdersData;

export default function MyOrders() {
  const [rows, setRows] = useState(myOrders);

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
