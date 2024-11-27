package com.example.auth.common;

import lombok.Getter;

@Getter
public class ErrorAuthResponse implements AuthResponse {
    private final String errorMessage;
    
    public ErrorAuthResponse(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
