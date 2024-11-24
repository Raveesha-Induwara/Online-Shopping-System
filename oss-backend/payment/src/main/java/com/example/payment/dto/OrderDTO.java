package com.example.payment.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDTO {
    private int orderId;
    private int customerId;
    private int orderDate;
    private ArrayList<Integer> itemIds;
    private double totalAmount;
    private int paymentId;
    private int deliveryAssign;

}
