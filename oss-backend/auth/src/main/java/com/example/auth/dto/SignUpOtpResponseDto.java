package com.example.auth.dto;

import jdk.jfr.Description;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SignUpOtpResponseDto {
    
    @Description("The status of the response")
    private String status;
    
    @Description("The message of the response")
    private String message;
}
