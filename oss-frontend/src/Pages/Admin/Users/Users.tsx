import React, { useState, useEffect } from "react";
// import PageHeader from "../../Components/PageHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import GroupIcon from "@mui/icons-material/Group";
import axios from "../../../service/api-client";

// Interfaces for types
interface OrderSummary {
  products: string[];
  totalPrice: number;
}

interface User {
  customerId: string;
  firstName: string;
  lastName: string;
  mobileNo: string;
  email: string;
  homeNo: string;
  street: string;
  city: string;
}

// Custom styles
const useStyles = makeStyles({
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f0f0f0", // Row highlight on hover
    },
  },
  orderSummary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center align content
    justifyContent: "center", // Center align vertically
    gap: "4px", // Add spacing between products and total price
  },
  orderSummaryRow: {
    textAlign: "center",
  },
  detailItem: {
    marginBottom: "8px",
  },
});

const Users: React.FC = () => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    axios
      .get(`/customers/getusers`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert("An error occurred while fetching data");
        console.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
  };

  // const handleDeleteUser = async () => {
  //   if (!selectedUser) return;
  //   try {
  //     const remainingUsers = await UsersService.deleteUser(selectedUser.customerId);
  //     setUsers(remainingUsers as User[]);
  //     setSelectedUser(null);
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  // };

  return (
    <>
      {/* <PageHeader
        title="Users"
        subTitle="Manage all users"
        icon={<GroupIcon />}
      /> */}
      <div style={{ margin: "20px", width: "100%" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#d9d7d7" }}>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Mobile No.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.customerId}
                  className={classes.tableRow}
                  onClick={() => handleRowClick(user)}
                >
                  <TableCell align="center">{user.customerId}</TableCell>
                  <TableCell align="center">
                    {user.firstName + " " + user.lastName}
                  </TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  {/* <TableCell align="center" className={classes.orderSummary}>
                    <div className={classes.orderSummaryRow}>
                      <strong>Products:</strong>{" "}
                      {user.orderSummary.products.join(", ")}
                    </div>
                    <div className={classes.orderSummaryRow}>
                      <strong>Total Price:</strong> $
                      {user.orderSummary.totalPrice.toFixed(2)}
                    </div>
                  </TableCell> */}
                  <TableCell align="center">{user.mobileNo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* User Details Dialog */}
      <Dialog
        open={Boolean(selectedUser)}
        onClose={() => setSelectedUser(null)}
      >
        {selectedUser && (
          <>
            <DialogTitle>User Details</DialogTitle>
            <DialogContent>
              {[
                { label: "User ID", value: selectedUser.customerId },
                {
                  label: "Username",
                  value: selectedUser.firstName + " " + selectedUser.lastName,
                },
                {
                  label: "Order Summary",
                  value: (
                    <>
                      {/* <div>
                        <strong>Products:</strong>{" "}
                        {selectedUser.orderSummary.products.join(", ")}
                      </div>
                      <div>
                        <strong>Total Price:</strong> $
                        {selectedUser.orderSummary.totalPrice.toFixed(2)}
                      </div> */}
                    </>
                  ),
                },
                { label: "Mobile Number", value: selectedUser.mobileNo },
                { label: "Email Address", value: selectedUser.email },
                {
                  label: "Address",
                  value:
                    selectedUser.homeNo +
                    ", " +
                    selectedUser.street +
                    ", " +
                    selectedUser.city,
                },
              ].map((detail, index) => (
                <div key={index} className={classes.detailItem}>
                  <strong>{detail.label}:</strong> {detail.value}
                </div>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedUser(null)}>Close</Button>
              {/* <Button color="error">
                Delete
              </Button> */}
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Users;
