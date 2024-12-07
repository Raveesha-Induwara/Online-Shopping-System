package com.example.user.common;

import com.example.user.model.Admin;
import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;

@Getter
public class SuccessAdminResponse implements UserResponse {
    private final Admin admin;
    
    @JsonCreator
    public SuccessAdminResponse(Admin adminResponse) {
        this.admin = adminResponse;
    }
}
