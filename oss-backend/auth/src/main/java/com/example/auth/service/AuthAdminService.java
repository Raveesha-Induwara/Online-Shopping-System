package com.example.user.service;

import com.example.user.dto.LoginRequestDto;
import com.example.user.dto.LoginResponseDto;
import com.example.user.repo.AdminCredentialRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AuthAdminService {
    private final WebClient userWebClient;
    
    @Autowired
    private AdminCredentialRepo adminPasswordRepo;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public AuthAdminService(WebClient userWebClient) {
        this.userWebClient = userWebClient;
    }
    
    public LoginResponseDto login(LoginRequestDto request) {
        return null;
    }
}
