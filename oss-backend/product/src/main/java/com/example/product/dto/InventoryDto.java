package com.example.product.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InventoryDto {
    
    @NotNull(message = "ProductId is mandatory")
    private Long productId;
    
    @NotNull(message = "Quantity is mandatory")
    private Integer quantity;
}
