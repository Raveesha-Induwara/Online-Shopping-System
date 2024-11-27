package com.example.auth.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequestDto {
    
    @NotNull(message = "Email is required")
    private String email;
    
    @NotNull(message = "Password is required")
    @Size(min = 8, max = 15, message = "Password must be at least 8 characters long and at most 15 characters long")
    private String password;
}
