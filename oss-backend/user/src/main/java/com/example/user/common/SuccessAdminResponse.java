package com.example.user.common;

import com.example.user.dto.AdminResponseDto;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Getter;

@Getter
public class SuccessAdminResponse implements UserResponse {
    @JsonUnwrapped
    private final AdminResponseDto admin;
    
    public SuccessAdminResponse(AdminResponseDto adminResponse) {
        this.admin = adminResponse;
    }
}
