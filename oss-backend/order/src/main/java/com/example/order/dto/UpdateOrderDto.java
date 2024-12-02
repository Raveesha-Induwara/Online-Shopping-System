package com.example.order.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateOrderDto {
    
    @NotNull(message = "deliveryAssigned is required")
    private String deliveryAssigned;
    
    @NotNull(message = "orderStatus is required")
    private String orderStatus;
}
