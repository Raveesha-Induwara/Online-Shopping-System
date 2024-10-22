package com.example.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerResponseDto {
    
    private int customerId;
    private String email;
    private String firstName;
    private String lastName;
    private String mobileNo;
    private String homeNo;
    private String street;
    private String city;
}
