package com.example.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class OrderRespond {
    private Long orderId;
    private String orderStatus;
    private String orderDate;
    private Double totalAmount;
    private String diliveryAssinged;

}
