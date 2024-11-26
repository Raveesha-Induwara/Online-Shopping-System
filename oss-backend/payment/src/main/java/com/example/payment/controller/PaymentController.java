package com.example.payment.controller;

import com.example.payment.dto.OrderDTO;
import com.example.payment.dto.response.PaymentResponse;
import com.example.payment.service.PaymentService;
import com.example.payment.dto.response.StandardResponse;
import com.stripe.exception.StripeException;
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


    //for create payment link for online payment
    //input order details
    //output stripe session link
    @GetMapping("create-payment-link")
    public ResponseEntity<StandardResponse> createPaymentLink(@RequestBody OrderDTO orderDTO) throws StripeException {
        PaymentResponse response = paymentService.createPaymentLink(orderDTO);
       // return  new ResponseEntity<StandardResponse>(new StandardResponse(200,"success","hello"),HttpStatus.OK);
        return new ResponseEntity<StandardResponse>(new StandardResponse(200,"success",response),HttpStatus.OK);

    }

}
