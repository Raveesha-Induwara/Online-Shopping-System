package com.example.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerUpdateDto {
    
    @NotNull(message = "email is mandatory")
    @Email(message = "email is not valid")
    private String email;
    
    @NotNull(message = "firstName is mandatory")
    private String firstName;
    
    @NotNull(message = "lastName is mandatory")
    private String lastName;
    
    @NotNull(message = "mobileNo is mandatory")
    private String mobileNo;
    
    private String address;
    private String gender;
    private String dateOfBirth;
    private String imageUrl;
}
