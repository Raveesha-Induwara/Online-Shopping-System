package com.example.auth.model;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Admin {
    
    @Id
    private String adminId;
    
    @Column(unique = true)
    private String email;
    
    private String firstName;
    private String lastName;
}
