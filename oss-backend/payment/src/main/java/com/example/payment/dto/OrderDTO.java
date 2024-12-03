package com.example.payment.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDTO {
    private int orderId;
    private LocalDate orderedDate;
    private int customerId;
    private List<OrderItemDTO> items;
    private double totalAmount;
    private String orderStatus;
    private String paymentStatus;
}
