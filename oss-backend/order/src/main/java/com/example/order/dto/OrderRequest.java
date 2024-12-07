package com.example.order.dto;

import com.example.order.model.OrderItem;
import jakarta.validation.constraints.NotNull;
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
public class OrderRequest {
    
    @NotNull(message = "userId is required")
    private String userId;
    
    @NotNull(message = "orderDate is required")
    private Double totalAmount;
    
//    @NotNull(message = "orderItems is required")
//    private List<OrderItem> orderItems;
}
