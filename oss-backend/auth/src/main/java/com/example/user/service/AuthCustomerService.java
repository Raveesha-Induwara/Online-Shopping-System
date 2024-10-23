package com.example.user.service;

import com.example.user.common.AuthResponse;
import com.example.user.dto.*;
import org.springframework.stereotype.Service;

@Service
public class AuthCustomerService {
    
    public SignUpOtpResponseDto createSignupOtp(SignUpOtpRequestDto request) {
        return null;
    }
    
    public AuthResponse signUp(SignUpOtpRequestDto request) {
        return null;
    }
    
    public LoginResponseDto login(LoginRequestDto request) {
        return null;
    }
    
    public LoginResponseDto requestOtp(OtpRequestDto request) {
        return null;
    }
    
    public LoginResponseDto refreshToken(RefreshTokenRequestDto request) {
        return null;
    }
}
