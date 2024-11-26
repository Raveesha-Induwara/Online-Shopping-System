package com.example.payment.advisor;

import com.example.payment.dto.response.StandardResponse;
import com.example.payment.exception.PaymentException;
import com.example.payment.exception.PaymentProcessingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppWideExceptionHandler {


    @ExceptionHandler(PaymentException.class)
    public ResponseEntity<StandardResponse> handlePaymentException(PaymentException e){
        return new ResponseEntity<StandardResponse>(new StandardResponse(400,"Error",e.getMessage()),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PaymentProcessingException.class)
    public ResponseEntity<StandardResponse> handlePaymentProcessingException(PaymentProcessingException e){
        return new ResponseEntity<StandardResponse>(new StandardResponse(500,"Error",e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
