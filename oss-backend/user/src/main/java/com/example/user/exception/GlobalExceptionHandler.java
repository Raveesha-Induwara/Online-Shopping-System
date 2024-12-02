package com.example.user.exception;

import com.example.user.dto.ResponseDto;
import com.example.user.exception.types.EmailAlreadyFoundException;
import com.example.user.exception.types.EmailNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    
    @ExceptionHandler(EmailAlreadyFoundException.class)
    public final ResponseEntity<ResponseDto> itemNotFoundException(EmailAlreadyFoundException ex) {
        ex.printStackTrace();
        log.error("Email already registered!");
        return new ResponseEntity<>(new ResponseDto("500",ex.getMessage()), HttpStatus.FOUND);
    }
    
    @ExceptionHandler(EmailNotFoundException.class)
    public final ResponseEntity<ResponseDto> emailNotFoundException(EmailNotFoundException ex) {
        ex.printStackTrace();
        log.error("Email not found!");
        return new ResponseEntity<>(new ResponseDto("500",ex.getMessage()), HttpStatus.NOT_FOUND);
    }
}