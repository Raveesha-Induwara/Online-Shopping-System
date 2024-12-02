package com.example.user.common;

import com.example.user.model.Customer;
import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;

import java.util.Optional;

@Getter
public class SuccessCustomerResponse implements UserResponse{
    private final Optional<Customer> customer;
    
    @JsonCreator
    public SuccessCustomerResponse(Optional<Customer> customer) {
        this.customer = customer;
    }
}
