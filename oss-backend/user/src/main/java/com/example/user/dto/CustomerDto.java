package com.example.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {
    
    @NotNull(message = "customerId is mandatory")
    private String customerId;
    
    @NotNull(message = "first name is mandatory")
    private String firstName;
    
    @NotNull(message = "last name is mandatory")
    private String lastName;
    
    @NotNull(message = "email is mandatory")
    @Email(message = "email is not valid")
    private String email;
}
