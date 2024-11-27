package com.example.auth.service;

import com.example.auth.common.SuccessAuthResponse;
import com.example.auth.dto.*;
import com.example.auth.repo.ClientCredentialRepo;
import com.example.auth.common.AuthResponse;
import com.example.auth.common.ErrorAuthResponse;
import com.example.user.common.UserResponse;
import com.example.user.dto.*;
import com.example.auth.enums.UserType;
import com.example.auth.model.ClientCredential;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.util.Date;
import java.util.UUID;

@Service
public class AuthCustomerService {
    private final WebClient userWebClient;
    
    @Autowired
    private AuthService authService;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ClientCredentialRepo clientCredentialRepo;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    
    public AuthCustomerService(WebClient userWebClient) {
        this.userWebClient = userWebClient;
    }
    
    public SignUpOtpResponseDto createSignupOtp(SignUpOtpRequestDto request) {
        return null;
    }
    
    public AuthResponse signUp(SignUpOtpRequestDto request) {
        request.setPassword(passwordEncoder.encode(request.getPassword()));
        String clientId = (UUID.randomUUID()).toString();
        
        CustomerDto customerDto = new CustomerDto();
        customerDto.setCustomerId(clientId);
        customerDto.setEmail(request.getEmail());
        customerDto.setFirstName(request.getFirstName());
        customerDto.setLastName(request.getLastName());
        
        try {
            userWebClient.post()
                    .uri(uriBuilder -> uriBuilder.path("/adduser").build())
                    .bodyValue(customerDto)
                    .retrieve()
                    .bodyToMono(UserResponse.class)
                    .block();
        } catch (WebClientResponseException e) {
            if(e.getStatusCode().is5xxServerError()) {
                return new ErrorAuthResponse("Email is already registered");
            }
        }
        
        ClientCredential client = new ClientCredential();
        client.setUserId(clientId);
        client.setPassword(request.getPassword());
        client.setCreatedTime(new Date().getTime());
        
        // save user to db
        clientCredentialRepo.save(modelMapper.map(client, ClientCredential.class));
        
        LoginResponseDto response = new LoginResponseDto();
        response.setAccessToken(authService.generateToken(request.getEmail()));
        response.setRefreshToken("refresh");
        response.setStatus("success");
        response.setUserType(UserType.Customer);
        
        return new SuccessAuthResponse(response);
    }
    
    public LoginResponseDto login(LoginRequestDto request) {
        return null;
    }
    
    public LoginResponseDto requestOtp(OtpRequestDto request) {
        return null;
    }
    
    public LoginResponseDto refreshToken(RefreshTokenRequestDto request) {
        return null;
    }
    
    private Authentication authenticate(String email, String password) {
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(email);
        if(userDetails == null) {
            throw new BadCredentialsException("Invalid email");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
