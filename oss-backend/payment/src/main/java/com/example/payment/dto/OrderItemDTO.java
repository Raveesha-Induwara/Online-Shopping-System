package com.example.payment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDTO {
    private int productId;
    private String productName;// Optional, if needed
    private Integer quantity;
    private Double price;
    //private Double subtotal;
}
