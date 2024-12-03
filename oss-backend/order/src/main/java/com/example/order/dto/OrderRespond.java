package com.example.order.dto;

import com.example.order.model.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderRespond {
    private Long orderId;
    private String orderStatus;
    private Date orderDate;
    private Double totalAmount;
    private String deliveryAssigned;
    private List<OrderItemRespond> orderItems;
}
