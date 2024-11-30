package com.example.auth.controller;

import com.example.auth.dto.*;
import com.example.auth.service.AuthAdminService;
import com.example.auth.common.AuthResponse;
import com.example.auth.service.AuthCustomerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    
    @PostMapping(value = "/signup/client/create-otp")
    public SignUpOtpResponseDto createSignupOtp(@Valid @RequestBody SignUpOtpRequestDto request) {
        return authCustomerService.createSignupOtp(request);
    }
    
    @PostMapping(value = "/signup/client")
    public AuthResponse handlerClientSignUp(@Valid @RequestBody SignUpOtpRequestDto request) {
        return authCustomerService.signUp(request);
    }
    
    @PostMapping(value = "/login/client")
    public LoginResponseDto handlerClientLogin(@Valid @RequestBody LoginRequestDto request) {
        return authCustomerService.login(request);
    }
    
    @PostMapping(value = "/request-otp/client")
    public LoginResponseDto requestOtp(@Valid @RequestBody OtpRequestDto request) {
        return authCustomerService.requestOtp(request);
    }
    
    @PostMapping(value = "/refresh-token")
    public LoginResponseDto refreshToken(@Valid @RequestBody RefreshTokenRequestDto request) {
        return authCustomerService.refreshToken(request);
    }
    
    @PostMapping(value = "/signup/admin")
    public AuthResponse handlerAdminSignUp(@Valid @RequestBody SignUpOtpRequestDto request) {
        return authAdminService.signUp(request);
    }
    
    @PostMapping(value = "/login/admin")
    public LoginResponseDto handlerAdminLogin(@Valid @RequestBody LoginRequestDto request) {
        return authAdminService.login(request);
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
