package com.example.auth.controller;

import com.example.auth.dto.*;
import com.example.auth.service.AuthAdminService;
import com.example.auth.common.AuthResponse;
import com.example.auth.service.AuthCustomerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "api/v1/auth")
public class AuthController {
    @Autowired
    private AuthCustomerService authCustomerService;
    
    @Autowired
    private AuthAdminService authAdminService;
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping(value = "/signup/client/create-otp")
    public ResponseEntity<LoginOtpResponseDto> createSignupOtp(@Valid @RequestBody LoginOtpRequestDto request) {
        return new ResponseEntity<>(authCustomerService.createSignupOtp(request), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping(value = "/login/client")
    public ResponseEntity<LoginResponseDto> handlerClientLogin(@Valid @RequestBody LoginRequestDto request) {
        return new ResponseEntity<>(authCustomerService.login(request), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping(value = "/signup/client")
    public ResponseEntity<AuthResponse> handlerClientSignUp(@Valid @RequestBody SignUpRequestDto request) {
        return new ResponseEntity<>(authCustomerService.signUp(request), HttpStatus.CREATED);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping(value = "/request-otp/client")
    public ResponseEntity<LoginOtpResponseDto> requestOtp(@Valid @RequestBody OtpRequestDto request) {
        return new ResponseEntity<>(authCustomerService.requestOtp(request), HttpStatus.OK);
    }
    
//    @PostMapping(value = "/refresh-token")
//    public ResponseEntity<LoginResponseDto> refreshToken(@Valid @RequestBody RefreshTokenRequestDto request) {
//        return new ResponseEntity<>(authCustomerService.refreshToken(request), HttpStatus.OK);
//    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping(value = "/signup/admin")
    public ResponseEntity<AuthResponse> handlerAdminSignUp(@Valid @RequestBody SignUpRequestDto request) {
        return new ResponseEntity<>(authAdminService.signUp(request), HttpStatus.CREATED);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping(value = "/login/admin")
    public ResponseEntity<LoginResponseDto> handlerAdminLogin(@Valid @RequestBody LoginRequestDto request) {
        return new ResponseEntity<>(authAdminService.login(request), HttpStatus.OK);
    }
    
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        
        Map<String, String> errors = new HashMap<>();
        
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError)error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        return errors;
    }
}
