package com.example.auth.model;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Customer {
    
    @Id
    private String customerId;
    
    @Column(unique = true)
    private String email;
    
    private String firstName;
    private String lastName;
    private String mobileNo;
    private String address;
    private String gender;
    private String dateOfBirth;
    private String imageUrl;
}
