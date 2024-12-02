package com.example.order.exception;

import com.example.order.dto.ResponseDto;
import com.example.order.exception.type.ItemNotFoundException;
import com.example.order.exception.type.OrderNotFoundException;
import com.example.order.exception.type.WebClientException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(OrderNotFoundException.class)
    public ResponseEntity<ResponseDto> OrderNotFoundException(OrderNotFoundException ex) {
        log.error("OrderNotFoundException: {}", ex.getMessage());
        return new ResponseEntity<>(new ResponseDto(ex.getMessage()), HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(ItemNotFoundException.class)
    public final ResponseEntity<ResponseDto> itemNotFoundException(ItemNotFoundException ex) {
        ex.printStackTrace();
        log.error("Item is not found for given product ID!");
        return new ResponseEntity<>(new ResponseDto("500", ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @ExceptionHandler(WebClientException.class)
    public ResponseEntity<ResponseDto> WebClientException(WebClientException ex) {
        log.error("WebClientException: {}", ex.getMessage(), ex);
        return new ResponseEntity<>(new ResponseDto("500","An internal server error occurred: " + ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseDto> handleGenericException(Exception ex) {
        log.error("Exception: {}", ex.getMessage(), ex);
        return new ResponseEntity<>(new ResponseDto("500", "An unexpected error occurred: " + ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
