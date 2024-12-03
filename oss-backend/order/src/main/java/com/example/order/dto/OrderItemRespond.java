package com.example.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemRespond {
    private Long id;
    private Long productId;
    private String name;
    private String description;
    private Double price;
    private int quantity;
}
