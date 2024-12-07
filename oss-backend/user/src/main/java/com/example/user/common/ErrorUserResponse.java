package com.example.user.common;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;

@Getter
public class ErrorUserResponse implements UserResponse {
    private final String errorMessage;
    
    @JsonCreator
    public ErrorUserResponse(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
