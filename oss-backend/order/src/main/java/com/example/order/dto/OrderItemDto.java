package com.example.order.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDto {
    
    @NotNull(message = "productId is required")
    private Long productId;
    
    @NotNull(message = "Name is required")
    private String name;
    
    @NotNull(message = "Description is required")
    private String description;
    
    @NotNull(message = "Price is required")
    private double price;
    
    @NotNull(message = "Quantity is required")
    private int quantity;
}
