package com.example.payment.controller;

import com.example.payment.dto.OrderDTO;
import com.example.payment.service.PaymentService;
import com.example.payment.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/payments")
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("process")
    public ResponseEntity<StandardResponse> processPayment(OrderDTO order){
        return new ResponseEntity<StandardResponse>(new StandardResponse(200,"Success",null),HttpStatus.OK);
    }


}
