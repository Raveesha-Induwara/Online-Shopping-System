package com.example.user.controller;

import com.example.user.common.AuthResponse;
import com.example.user.dto.*;
import com.example.user.service.AuthAdminService;
import com.example.user.service.AuthCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {
    @Autowired
    private AuthCustomerService authCustomerService;
    
    @Autowired
    private AuthAdminService authAdminService;
    
    @PostMapping(value = "/signup/client/create-otp")
    public SignUpOtpResponseDto createSignupOtp(@RequestBody SignUpOtpRequestDto request) {
        return authCustomerService.createSignupOtp(request);
    }
    
    @PostMapping(value = "/signup/client")
    public AuthResponse handlerClientSignUp(@RequestBody SignUpOtpRequestDto request) {
        return authCustomerService.signUp(request);
    }
    
    @PostMapping(value = "/login/client")
    public LoginResponseDto handlerClientLogin(@RequestBody LoginRequestDto request) {
        return authCustomerService.login(request);
    }
    
    @PostMapping(value = "/request-otp/client")
    public LoginResponseDto requestOtp(@RequestBody OtpRequestDto request) {
        return authCustomerService.requestOtp(request);
    }
    
    @PostMapping(value = "/refresh-token")
    public LoginResponseDto refreshToken(@RequestBody RefreshTokenRequestDto request) {
        return authCustomerService.refreshToken(request);
    }
    
    @PostMapping(value = "/login/admin")
    public LoginResponseDto handlerAdminLogin(@RequestBody LoginRequestDto request) {
        return authAdminService.login(request);
    }
}
