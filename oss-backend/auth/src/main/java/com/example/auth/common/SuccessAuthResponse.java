package com.example.auth.common;

import com.example.auth.dto.LoginResponseDto;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Getter;

@Getter
public class SuccessAuthResponse implements AuthResponse {
    @JsonUnwrapped
    private final LoginResponseDto response;
    
    public SuccessAuthResponse(LoginResponseDto response) {
        this.response = response;
    }
}
