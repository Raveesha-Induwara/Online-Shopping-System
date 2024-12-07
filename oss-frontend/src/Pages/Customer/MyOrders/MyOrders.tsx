import { useEffect, useState } from "react";
import {
  Box,
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
import { NavBar } from "../../../Components/NavBar";
import axios from "axios";

interface OrderItem {
  id: number;
  productId: number;
  name: number;
  description: string;
  price: number;
  quantity: number;
}
interface Order {
  orderId: number;
  orderStatus: string;
  orderDate: string;
  totalAmount: number;
  deliveryAssigned: string;
  orderItems: Array<OrderItem>;
}

export default function MyOrders() {
  const [orders, setOrders] = useState<Array<Order>>([]);
  const userId = localStorage.getItem("userId");

  // Fetch orders
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8085/api/v1/orders/user/${userId}`)
        .then((res) => {
          setOrders(res.data);
          console.log("Orders:", res.data);
        });
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }, [userId]);

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
      <Box sx={{ paddingLeft: 2, paddingRight: 2 }}>
        <TableContainer component={Paper} sx={{ paddingTop: 10 }}>
          <Table>
            <TableHead sx={{ background: "#185A9D", color: "white" }}>
              <TableRow>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Order ID
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Product ID
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Product Name
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Description
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Order Date
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Order Status
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Delivery Status
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Total Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order: Order) => (
                <TableRow key={order.orderId}>
                  <TableCell sx={{ textAlign: "center" }}>
                    {order.orderId}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {order.orderItems.map((item) => (
                      <Table>
                        <TableRow sx={{ textAlign: "left" }}>
                          {item.productId}
                        </TableRow>
                      </Table>
                    ))}
                    {/* <img
                      src={order.orderItems[0].id}
                      style={{ width: 100, height: 100, objectFit: "contain" }}
                    /> */}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {order.orderItems.map((item) => (
                      <TableRow sx={{ textAlign: "left" }}>
                        {item.name}
                      </TableRow>
                    ))}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {order.orderItems.map((item) => (
                      <TableRow sx={{ textAlign: "left" }}>
                        {item.description}
                      </TableRow>
                    ))}
                  </TableCell>

                  <TableCell sx={{ textAlign: "center" }}>
                    {order.orderDate.split("T")[0]}
                  </TableCell>

                  <TableCell sx={{ width: 3 }}>
                    <Alert
                      severity={
                        order.orderStatus === "PENDING" ? "success" : "warning"
                      }
                      icon={false}
                    >
                      <AlertTitle>{order.orderStatus}</AlertTitle>
                    </Alert>
                  </TableCell>

                  <TableCell sx={{ textAlign: "center" }}>
                    <Alert
                      severity={
                        order.orderStatus === "ASSIGNED" ? "success" : "warning"
                      }
                      icon={false}
                    >
                      <AlertTitle>{order.deliveryAssigned}</AlertTitle>
                    </Alert>
                  </TableCell>

                  <TableCell sx={{ textAlign: "center" }}>
                    LKR {order.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
