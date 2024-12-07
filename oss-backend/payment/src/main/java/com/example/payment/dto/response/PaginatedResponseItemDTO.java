package com.example.payment.dto.response;

import com.example.payment.dto.PaymentDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaginatedResponseItemDTO {
    private List<PaymentDTO> paymentList;

    private long dataCount;

}
