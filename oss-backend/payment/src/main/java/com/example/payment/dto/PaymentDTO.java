package com.example.payment.dto;


import com.example.payment.util.enums.PaymentMethodType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentDTO {

    private LocalDate paymentDate;

    private int paymentId;

    private int orderId;

    private String customerId;

    private double amount;

    private PaymentMethodType paymentMethod;
}
