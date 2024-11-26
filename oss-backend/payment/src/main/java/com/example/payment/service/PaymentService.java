package com.example.payment.service;

import com.example.payment.dto.OrderDTO;
import com.example.payment.dto.response.PaymentResponse;
import com.stripe.exception.StripeException;

public interface PaymentService {
    PaymentResponse createPaymentLink(OrderDTO orderDTO) throws StripeException;
}
