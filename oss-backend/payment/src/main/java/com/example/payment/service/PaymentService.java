package com.example.payment.service;

import com.example.payment.dto.PaymentDTO;
import com.example.payment.dto.request.PaymentRequestDTO;
import com.example.payment.dto.request.PaymentSaveRequestDTO;
import com.example.payment.dto.request.UpdatePaymentRequestDTO;
import com.example.payment.dto.response.PaginatedResponseItemDTO;
import com.example.payment.dto.response.PaymentResponse;
import com.stripe.exception.StripeException;

import java.util.List;

public interface PaymentService {
    PaymentResponse createPaymentLink(PaymentRequestDTO paymentRequest) throws StripeException;

    void savePayment(PaymentSaveRequestDTO paymentSaveRequestDTO);

    PaginatedResponseItemDTO getAllPaymentsByPage(int pageNo);

    List<PaymentDTO> getAllPayments();

    Object deletePayment(int paymentId);

    Object updatePayment(int paymentId, UpdatePaymentRequestDTO updatePaymentRequestDTO);
}
