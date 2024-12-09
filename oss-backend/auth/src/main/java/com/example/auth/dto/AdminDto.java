package com.example.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminDto {
    
    @NotNull(message = "adminId is mandatory")
    private String adminId;
    
    @NotNull(message = "firstName is mandatory")
    private String firstName;
    
    @NotNull(message = "lastName is mandatory")
    private String lastName;
    
    @NotNull(message = "email is mandatory")
    @Email(message = "email is not valid")
    private String email;
}
