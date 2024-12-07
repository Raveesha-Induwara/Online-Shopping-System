package com.example.inventory.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryDto {
    
    @NotNull(message = "ProductId is mandatory")
    private Long productId;
    
    @NotNull(message = "Quantity is mandatory")
    private Integer quantity;
}
