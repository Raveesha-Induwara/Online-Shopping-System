package com.example.payment.dto.request;

import com.example.payment.util.enums.PaymentMethodType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentSaveRequestDTO {

    private int orderId;

    private String customerId;

    private double Amount;

    private PaymentMethodType paymentMethod;

}
