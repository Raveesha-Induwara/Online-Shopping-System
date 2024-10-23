package com.example.user.common;

import com.example.user.model.Admin;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Getter;

@Getter
public class SuccessAdminResponse implements UserResponse {
    @JsonUnwrapped
    private final Admin admin;
    
    public SuccessAdminResponse(Admin adminResponse) {
        this.admin = adminResponse;
    }
}
