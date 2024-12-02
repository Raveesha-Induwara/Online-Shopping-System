package com.example.payment.util.mappers;

import com.example.payment.dto.PaymentDTO;
import com.example.payment.entity.Payment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PaymentMapper {
//Page<Payment> payments -----> List<PaymentDTO> paymentList
    List<PaymentDTO> paymentListToPaymentDTOList(List<Payment> payments);
}
