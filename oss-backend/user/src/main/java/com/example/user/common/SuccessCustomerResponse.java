package com.example.user.common;

import com.example.user.model.Customer;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Getter;

import java.util.Optional;

@Getter
public class SuccessCustomerResponse implements UserResponse{
    @JsonUnwrapped
    private final Optional<Customer> customer;
    
    public SuccessCustomerResponse(Optional<Customer> customer) {
        this.customer = customer;
    }
}
