package com.example.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
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
