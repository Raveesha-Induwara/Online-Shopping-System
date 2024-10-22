package com.example.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Customer {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;
    
    @Column(unique = true)
    private String email;
    
    private String firstName;
    private String lastName;
    private String password;
    private String mobileNo;
    private String homeNo;
    private String street;
    private String city;
}
