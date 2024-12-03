package com.example.order.service;

import com.example.cart.dto.CartItemDto;
import com.example.order.dto.OrderItemRespond;
import com.example.order.dto.OrderRequest;
import com.example.order.dto.OrderRespond;
import com.example.order.dto.UpdateOrderDto;
import com.example.order.enums.DeliveryAssign;
import com.example.order.enums.OrderStatus;
import com.example.order.exception.type.ItemNotFoundException;
import com.example.order.exception.type.OrderNotFoundException;
import com.example.order.model.Order;
import com.example.order.model.OrderItem;
import com.example.order.repository.OrderItemRepo;
import com.example.order.repository.OrderRepo;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
public class OrderService {
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private OrderItemRepo orderItemRepo;
    @Autowired
    private WebClientService webClientService;
    
    @Transactional
    public String createOrder(OrderRequest orderRequest) {
        Order newOrder = new Order();
        newOrder.setOrderDate(new Date());
        newOrder.setUserId(orderRequest.getUserId());
        newOrder.setTotalAmount(orderRequest.getTotalAmount());
        newOrder.setOrderStatus(String.valueOf(OrderStatus.PENDING));
        newOrder.setDeliveryAssigned(String.valueOf(DeliveryAssign.NOT_ASSIGNED));
        orderRepo.save(newOrder);
        
        // get cart item list
        List<CartItemDto> cartItems = webClientService.getCartItems(orderRequest.getUserId());
        if(cartItems == null) {
            throw new ItemNotFoundException("No items found in the cart");
        }
        cartItems.forEach(cartItem -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(newOrder);
            orderItem.setName(cartItem.getName());
            orderItem.setPrice(cartItem.getPrice());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setProductId(cartItem.getProductId());
            orderItem.setDescription(cartItem.getDescription());
            orderItemRepo.save(orderItem);
        });
        
        // delete cart
        webClientService.deleteCart(orderRequest.getUserId());
        return ("order created with id: " + newOrder.getOrderId());
    }

    public List<OrderRespond> getAllOrders() {
        try {
            List<Order> orders = orderRepo.findAll();
            return orders.stream()
                    .map(this::mapToOrderResponse)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            log.error("Error occurred while retrieving all orders", e);
            throw e;
        }
    }

    public OrderRespond getOrderById(Long id) {
        Optional<Order> order = orderRepo.findById(id);
        if(order.isEmpty()) {
            log.error("Error occurred while retrieving order with ID: {}", id);
            throw new OrderNotFoundException("Order not found with ID: " + id);
        }
        return mapToOrderResponse(order.get());
    }
    
    @Transactional
    public String updateOrder(Long id, UpdateOrderDto request) {
        try {
            // Fetch the existing order from the repository
            Order existingOrder = orderRepo.findById(id)
                    .orElseThrow(() -> new OrderNotFoundException("Order not found with ID: " + id));
            
            if (Objects.equals(request.getOrderStatus(), "pending")) {
                existingOrder.setOrderStatus(String.valueOf(OrderStatus.PENDING));
            }
            else if (Objects.equals(request.getOrderStatus(), "delivered")) {
                existingOrder.setDeliveryAssigned(String.valueOf(OrderStatus.DELIVERED));
            } else {
                existingOrder.setOrderStatus(String.valueOf(OrderStatus.CANCELLED));
            }
            
            if (Objects.equals(request.getDeliveryAssigned(), "assigned")) {
                existingOrder.setDeliveryAssigned(String.valueOf(DeliveryAssign.ASSIGNED));
            } else {
                existingOrder.setDeliveryAssigned(String.valueOf(DeliveryAssign.NOT_ASSIGNED));
            }

            // Save the updated order
            orderRepo.save(existingOrder);
            return "order updated successfully";
        } catch (Exception e) {
            log.error("Error occurred while updating order with ID: {}", id, e);
            return ("Order not found with ID: " + id);
        }
    }
    
    @Transactional
    public String deleteOrder(Long id) {
        if (!orderRepo.existsById(id)) {
            throw new OrderNotFoundException("Cannot delete, Order not found with ID: " + id);
        }
        orderRepo.deleteById(id);
        return ("Order deleted successfully");
    }
    
    private OrderRespond mapToOrderResponse(Order order) {
        return OrderRespond.builder()
                .orderId(order.getOrderId())
                .orderStatus(order.getOrderStatus())
                .orderDate(order.getOrderDate())
                .totalAmount(order.getTotalAmount())
                .deliveryAssigned(order.getDeliveryAssigned())
                .orderItems(order.getOrderItems().stream()
                                    .map(this::mapToOrderItemResponse)
                                    .collect(Collectors.toList()))
                .build();
    }
    
    private OrderItemRespond mapToOrderItemResponse(OrderItem orderItem) {
        return OrderItemRespond.builder()
                .id(orderItem.getId())
                .productId(orderItem.getProductId())
                .name(orderItem.getName())
                .description(orderItem.getDescription())
                .quantity(orderItem.getQuantity())
                .price(orderItem.getPrice())
                .build();
    }
}