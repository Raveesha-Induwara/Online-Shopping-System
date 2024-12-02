package com.example.auth.service;

import com.example.auth.common.AuthResponse;
import com.example.auth.common.ErrorAuthResponse;
import com.example.auth.common.SuccessAuthResponse;
import com.example.auth.dto.LoginRequestDto;
import com.example.auth.dto.LoginResponseDto;
import com.example.auth.dto.SignUpRequestDto;
import com.example.auth.enums.UserType;
import com.example.auth.exception.types.EmailAlreadyExistException;
import com.example.auth.model.AdminCredential;
import com.example.auth.repo.AdminCredentialRepo;
import com.example.user.dto.AdminDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.util.Date;
import java.util.UUID;

@Service
public class AuthAdminService {
    private final WebClient adminWebClient;
    
    @Autowired
    private AuthService authService;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AdminCredentialRepo adminCredentialRepo;
    
    public AuthAdminService(WebClient adminWebClient) {
        this.adminWebClient = adminWebClient;
    }
    
    public AuthResponse signUp(SignUpRequestDto request) {
        request.setPassword(passwordEncoder.encode(request.getPassword()));
        String adminId = (UUID.randomUUID()).toString();
        
        AdminDto adminDto = new AdminDto();
        adminDto.setAdminId(adminId);
        adminDto.setEmail(request.getEmail());
        adminDto.setFirstName(request.getFirstName());
        adminDto.setLastName(request.getLastName());
        
        try {
            adminWebClient.post()
                    .uri(uriBuilder -> uriBuilder.path("/addadmin").build())
                    .bodyValue(adminDto)
                    .retrieve()
                    .bodyToMono(AdminDto.class)
                    .block();
        } catch (WebClientResponseException e) {
            if(e.getStatusCode().is5xxServerError()) {
                throw  new EmailAlreadyExistException("Email is already registered");
            }
        }
        
        AdminCredential admin = new AdminCredential();
        admin.setUserId(adminId);
        admin.setPassword(request.getPassword());
        admin.setCreatedTime(new Date().getTime());
        
        // save admin to db
        adminCredentialRepo.save(modelMapper.map(admin, AdminCredential.class));
        
        LoginResponseDto response = new LoginResponseDto();
        response.setAccessToken(authService.generateToken(request.getEmail()));
        response.setRefreshToken("refresh");
        response.setStatus("success");
        response.setUserType(UserType.ADMIN);
        
        return new SuccessAuthResponse(response);
    }
    
    public LoginResponseDto login(LoginRequestDto request) {
        Authentication authentication = authService.authenticate(request.getEmail(), request.getPassword());
        
        if(authentication.isAuthenticated()) {
            LoginResponseDto response = new LoginResponseDto();
            response.setAccessToken(authService.generateToken(request.getEmail()));
            response.setRefreshToken("refresh");
            response.setStatus("success");
            response.setUserType(UserType.ADMIN);
            
            return response;
        }
        return  null;
    }
}
