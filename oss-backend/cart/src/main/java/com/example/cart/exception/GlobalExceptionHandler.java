package com.example.cart.exception;

import com.example.cart.dto.ResponseDto;
import com.example.cart.exception.types.CartNotFoundException;
import com.example.cart.exception.types.ItemNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ItemNotFoundException.class)
    public final ResponseEntity<ResponseDto> itemNotFoundException(ItemNotFoundException ex) {
        ex.printStackTrace();
        log.error("Item is not found for given product ID!");
        return new ResponseEntity<>(new ResponseDto("500",ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @ExceptionHandler(CartNotFoundException.class)
    public final ResponseEntity<ResponseDto> cartNotFoundException(CartNotFoundException ex) {
        ex.printStackTrace();
        log.error("Cart not find for given user ID!");
        return new ResponseEntity<>(new ResponseDto("500",ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}