package com.example.cart.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCartDto {
    
    @NotNull(message = "User ID is required")
    private String userId;
    
    @NotNull(message = "Product ID is required")
    private long productId;
    
    @NotNull(message = "Quantity is required")
    private int quantity;
}
