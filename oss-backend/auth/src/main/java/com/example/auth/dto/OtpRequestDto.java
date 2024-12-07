package com.example.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OtpRequestDto {
    
    @NotNull (message = "Email is required")
    @Email (message = "Email is invalid")
    private String email;
    
    @NotNull (message = "login | signup")
    private String mode;
}
