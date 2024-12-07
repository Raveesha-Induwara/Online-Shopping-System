package com.example.payment.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Payment processing failed")
public class PaymentException extends RuntimeException {

    public PaymentException(String message) {
        super(message);
    }

    public PaymentException(String message,Throwable cause){
        super(message, cause);
    }
}
