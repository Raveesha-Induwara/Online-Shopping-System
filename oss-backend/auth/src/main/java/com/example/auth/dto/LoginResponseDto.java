package com.example.auth.dto;

import com.example.auth.enums.UserType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {

    private String userId;
    private String accessToken;
    private String refreshToken;
    private UserType userType;
    private String status;
}
