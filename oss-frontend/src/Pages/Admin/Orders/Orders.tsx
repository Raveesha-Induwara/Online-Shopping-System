import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SelectChangeEvent,
} from "@mui/material";
import OrderService from "../../../assets/Data/OrdersService";
import axios from "axios";

interface OrderItem {
  id: string;
  productId: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
}

interface Order {
  orderId: string;
  customerId: string;
  orderStatus: string;
  deliveryAssigned: string;
  orderItems: OrderItem[];
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  // Fetch orders
  useEffect(() => {
    try {
      axios
        .get("http://localhost:8085/api/v1/orders/${}")
        .then((res) => {
          setOrders(res.data);
        });
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }, []);

  const handleStatusChange = async (
    e: SelectChangeEvent<string>,
    orderId: string
  ) => {
    const newStatus = e.target.value;
    try {
      const updatedOrders = orders.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      if (selectedOrder) {
        const remainingOrders = await OrderService.deleteOrder(
          selectedOrder.orderId
        );
        setOrders(remainingOrders as Order[]);
        setSelectedOrder(null);
      }
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleRowClick = (order: Order) => {
    setSelectedOrder(order);
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#d9d7d7" }}>
                <TableCell align="center">Order ID</TableCell>
                <TableCell align="center">Customer ID</TableCell>
                <TableCell align="center">Products Ordered</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Change Order Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.orderId}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      hoveredRow === order.orderId ? "#f0f0f0" : "inherit",
                  }}
                  onClick={() => handleRowClick(order)}
                  onMouseEnter={() => setHoveredRow(order.orderId)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <TableCell align="center">{order.orderId}</TableCell>
                  <TableCell align="center">{order.customerId}</TableCell>
                  <TableCell align="center">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      {order.products.map((product) => (
                        <img
                          key={product.productId}
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    {order.products.reduce(
                      (sum, product) => sum + product.quantity,
                      0
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Select
                      value={order.status}
                      onChange={(e) => handleStatusChange(e, order.orderId)}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        color:
                          order.status === "Pending"
                            ? "#1e90ff"
                            : order.status === "Accepted"
                            ? "#32cd32"
                            : order.status === "Failed"
                            ? "#e62b12"
                            : "inherit",
                        fontWeight: "bold",
                      }}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Accepted">Accepted</MenuItem>
                      <MenuItem value="Failed">Failed</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog
        open={Boolean(selectedOrder)}
        onClose={() => setSelectedOrder(null)}
      >
        {selectedOrder && (
          <>
            <DialogTitle>Order Details</DialogTitle>
            <DialogContent>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <div style={{ flex: 1 }}>
                  {[
                    "Order ID",
                    "Customer ID",
                    "Mobile Number",
                    "Pin Code",
                    "Ordered Date",
                    "Order Status",
                    "Total Discount",
                    "Total Amount",
                  ].map((label, index) => (
                    <Typography key={index}>
                      <strong>{label}:</strong>
                    </Typography>
                  ))}
                </div>
                <div style={{ flex: 1 }}>
                  {[
                    selectedOrder.orderId,
                    selectedOrder.customerId,
                    selectedOrder.mobile,
                    selectedOrder.pinCode,
                    selectedOrder.orderedDate,
                    selectedOrder.status,
                    selectedOrder.totalDiscount,
                    selectedOrder.totalAmount,
                  ].map((value, index) => (
                    <Typography key={index}>{value}</Typography>
                  ))}
                </div>
              </div>

              <Table style={{ marginTop: "20px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Product Image</TableCell>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedOrder.products.map((product) => (
                    <TableRow key={product.productId}>
                      <TableCell align="center">
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </TableCell>
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.quantity}</TableCell>
                      <TableCell align="center">{product.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedOrder(null)}>Close</Button>
              <Button color="error" onClick={handleDeleteOrder}>
                Delete
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
