package com.example.user.common;

import com.example.user.dto.CustomerResponseDto;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Getter;

@Getter
public class SuccessCustomerResponse implements UserResponse{
    @JsonUnwrapped
    private final CustomerResponseDto customer;
    
    public SuccessCustomerResponse(CustomerResponseDto customerResponse) {
        this.customer = customerResponse;
    }
}
