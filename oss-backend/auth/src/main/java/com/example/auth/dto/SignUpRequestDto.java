package com.example.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequestDto {
    
    @NotNull(message = "first name is mandatory")
    private String firstName;
    
    @NotNull(message = "last name is mandatory")
    private String lastName;
    
    @NotNull(message = "email is mandatory")
    @Email(message = "email is not valid")
    private String email;
    
    @NotNull(message = "password is mandatory")
    @Size(min = 8, max = 15, message = "password must be at least 8 characters long and at most 15 characters long")
    private String password;
    
    @NotNull(message = "Otp is mandatory")
    @Size(min = 6, max = 6, message = "Otp must be 6 characters long")
    private String otp;
}
