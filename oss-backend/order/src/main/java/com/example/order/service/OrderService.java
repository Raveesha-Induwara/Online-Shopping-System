package com.example.order.service;

import com.example.order.dto.OrderRequest;
import com.example.order.dto.OrderRespond;
import com.example.order.model.Order;
import com.example.order.repository.OrderRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j

public class OrderService {
    private final OrderRepository orderRepository;

    //create order service
    @Transactional
    public void createOrder(OrderRequest orderRequest) {
        try{
            Order order = Order.builder()
                    .orderStatus(orderRequest.getOrderStatus())
                    .orderDate(orderRequest.getOrderDate())
                    .totalAmount(orderRequest.getTotalAmount())
                    .deliveryAssigned(orderRequest.getDeliveryAssigned())
                    .build();
            orderRepository.save(order);
            log.info("order created with id: {}", order.getOrderId());
        }catch (Exception e){
            log.error(e.getMessage());
        }
    }

    //Get All order service
    public List<OrderRespond> getAllOrders() {
        try {
            List<Order> orders = orderRepository.findAll();
            return orders.stream()
                    .map(this::mapToOrderResponse)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            log.error("Error occurred while retrieving all orders", e);
            throw e;
        }
    }

    public OrderRespond getOrderById(Long id) {
        try {
            Order order = orderRepository.findById(id)
                    .orElseThrow(() -> new Exception("Product not found with ID: " + id));
            return mapToOrderResponse(order);
        } catch (Exception e) {
            log.error("Error occurred while retrieving product with ID: {}", id, e);
        }
        return null;
    }


    @Transactional
    public void updateOrder(Long id, OrderRequest orderRequest) {
        try {
            // Fetch the existing order from the repository
            Order existingOrder = orderRepository.findById(id)
                    .orElseThrow(() -> new Exception("Order not found with ID: " + id));

            // Update product details only if they are not null
            if (orderRequest.getOrderStatus() != null) {
                existingOrder.setOrderStatus(orderRequest.getOrderStatus());
            }
            if (orderRequest.getOrderDate() != null) {
                existingOrder.setOrderDate(orderRequest.getOrderDate());
            }
            if (orderRequest.getTotalAmount() != null) {
                existingOrder.setTotalAmount(orderRequest.getTotalAmount());
            }
            if (orderRequest.getDeliveryAssigned() != null) {
                existingOrder.setDeliveryAssigned(orderRequest.getDeliveryAssigned());
            }

            // Save the updated order
            orderRepository.save(existingOrder);
            log.info("Order updated with ID: {}", id);
        } catch (Exception e) {
            log.error("Error occurred while updating order with ID: {}", id, e);
            // Optionally, rethrow the exception or handle it as needed
        }
    }


    @Transactional
    public void deleteOrder(Long id) {
        try {
            if (!orderRepository.existsById(id)) {
                throw new Exception("Cannot delete, Order not found with ID: " + id);
            }
            orderRepository.deleteById(id);
            log.info("Order deleted with ID: {}", id);
        } catch (Exception e) {
            log.error("Error occurred while deleting order with ID: {}", id, e);

        }
    }



    private OrderRespond mapToOrderResponse(Order order) {
        return OrderRespond.builder()
                .orderId(order.getOrderId())
                .orderStatus(order.getOrderStatus())
                .orderDate(order.getOrderDate())
                .totalAmount(order.getTotalAmount())
                .deliveryAssigned(order.getDeliveryAssigned())
                .build();
    }
}