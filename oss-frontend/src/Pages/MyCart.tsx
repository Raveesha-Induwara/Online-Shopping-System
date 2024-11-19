import React from "react";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { PrimaryButton } from "../Components/PrimaryButton";

function createData(
  product: string,
  name: string,
  description: string,
  quantity: number
) {
  return { product, name, description, quantity };
}

const rows = [
  createData(
    "././src/assets/Images/maxi3.jpg",
    "Slate Maxi - Gown",
    "Slate Maxi - Gown",
    1
  ),
  createData(
    "././src/assets/Images/maxi2.jpg",
    "Slate Maxi - Gown2",
    "Slate Maxi - Gown2",
    3
  ),
];

export default function MyCart() {
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
                <TableCell>{row.quantity}</TableCell>
                <TableCell>
                  <PrimaryButton title="Delete" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
