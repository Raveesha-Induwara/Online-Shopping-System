package com.example.user.common;

import lombok.Getter;

@Getter
public class ErrorUserResponse implements UserResponse {
    private final String errorMessage;
    
    public ErrorUserResponse(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
