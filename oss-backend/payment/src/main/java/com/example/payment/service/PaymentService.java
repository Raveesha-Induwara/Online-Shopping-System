package com.example.payment.service;

import com.example.payment.dto.OrderDTO;
import com.example.payment.dto.PaymentDTO;
import com.example.payment.dto.request.UpdatePaymentRequestDTO;
import com.example.payment.dto.response.PaginatedResponseItemDTO;
import com.example.payment.dto.response.PaymentResponse;
import com.example.payment.entity.Payment;
import com.stripe.exception.StripeException;

import java.util.List;

public interface PaymentService {
    PaymentResponse createPaymentLink(OrderDTO orderDTO) throws StripeException;

    void savePayment(OrderDTO orderDTO);

    PaginatedResponseItemDTO getAllPaymentsByPage(int pageNo);

    List<PaymentDTO> getAllPayments();

    Object deletePayment(int paymentId);

    Object updatePayment(int paymentId, UpdatePaymentRequestDTO updatePaymentRequestDTO);
}
