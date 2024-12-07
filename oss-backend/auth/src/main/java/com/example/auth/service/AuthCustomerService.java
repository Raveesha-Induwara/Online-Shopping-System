package com.example.auth.service;

import com.example.auth.common.SuccessAuthResponse;
import com.example.auth.dto.*;
import com.example.auth.enums.OtpType;
import com.example.auth.exception.types.EmailAlreadyExistException;
import com.example.auth.exception.types.InvalidOtpException;
import com.example.auth.model.Otp;
import com.example.auth.repo.ClientCredentialRepo;
import com.example.auth.common.AuthResponse;
import com.example.auth.common.ErrorAuthResponse;
import com.example.auth.repo.OtpRepo;
import com.example.user.dto.*;
import com.example.auth.enums.UserType;
import com.example.auth.model.ClientCredential;
import com.example.user.model.Customer;
import jakarta.validation.constraints.Email;
import org.apache.commons.lang3.RandomStringUtils;
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
public class AuthCustomerService {
    private final WebClient userWebClient;
    
    @Autowired
    private AuthService authService;
    @Autowired
    private EmailService emailService;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ClientCredentialRepo clientCredentialRepo;
    @Autowired
    private OtpRepo otpRepo;
    
    public AuthCustomerService(WebClient userWebClient) {
        this.userWebClient = userWebClient;
    }
    
    public LoginOtpResponseDto createSignupOtp(LoginOtpRequestDto request) {
        try {
            Customer existingUser = userWebClient.get()
                    .uri(uriBuilder -> uriBuilder
                                       .path("/getuser")
                                       .queryParam("email", request.getEmail())
                                       .build())
                    .retrieve()
                    .bodyToMono(Customer.class)
                    .block();
            
            if(existingUser != null) {
                throw  new EmailAlreadyExistException("Email is already registered");
            }
            
            Otp otp = new Otp();
            String otpCode = generateOtp();
            otp.setEmail(request.getEmail());
            otp.setOtp(otpCode);
            otp.setCreated(new Date());
            otp.setOtpType(String.valueOf(OtpType.SIGNUP));
            otp.setUserType(String.valueOf(UserType.CUSTOMER));
            
            otpRepo.save(otp);
            emailService.sendOtpEmail(request.getEmail(), otpCode);
            
        } catch (WebClientResponseException e) {
            if(e.getStatusCode().is5xxServerError()) {
                throw new WebClientResponseException("Internal server error", 500, "Internal server error", null, null, null);
            }
        }
        
        return new LoginOtpResponseDto("success", "OTP sent successfully");
    }
    
    public AuthResponse signUp(SignUpRequestDto request) {
        Otp otpDocument = otpRepo.findOtpByEmailAndOtpTypeAndOtp(
                request.getEmail(), request.getOtp(), String.valueOf(OtpType.SIGNUP));
        
        if(otpDocument == null) {
            throw new InvalidOtpException("Invalid OTP");
        }
        
        long currentTimeMillis = new Date().getTime();
        long expirationTimeMillis = otpDocument.getCreated().getTime() + (1000 * 60 * 2);
        
        if(currentTimeMillis > expirationTimeMillis) {
            otpRepo.delete(otpDocument);
            throw new InvalidOtpException("OTP expired");
        };
        
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
                    .bodyToMono(CustomerDto.class)
                    .block();
        } catch (WebClientResponseException e) {
            if(e.getStatusCode().is5xxServerError()) {
                throw new EmailAlreadyExistException("Email is already registered");
            }
        }
        
        ClientCredential client = new ClientCredential();
        client.setUserId(clientId);
        client.setPassword(request.getPassword());
        client.setCreatedTime(new Date().getTime());
        
        clientCredentialRepo.save(modelMapper.map(client, ClientCredential.class));
        otpRepo.delete(otpDocument);
        return new SuccessAuthResponse(new LoginResponseDto(
                authService.generateToken(request.getEmail()),
                "refresh",
                UserType.CUSTOMER,
                "success"
        ));
    }
    
    public LoginResponseDto login(LoginRequestDto request) {
        Authentication authentication = authService.authenticate(request.getEmail(), request.getPassword());
        
        if(authentication.isAuthenticated()) {
            LoginResponseDto response = new LoginResponseDto();
            response.setAccessToken(authService.generateToken(request.getEmail()));
            response.setRefreshToken("refresh");
            response.setStatus("success");
            response.setUserType(UserType.CUSTOMER);
            
            return response;
        }
        return  null;
    }
    
    public LoginOtpResponseDto requestOtp(OtpRequestDto request) {
        Otp otp = new Otp();
        otp.setEmail(request.getEmail());
        otp.setOtp(generateOtp());
        otp.setCreated(new Date());
        otp.setOtpType(request.getMode());
        otp.setUserType(String.valueOf(UserType.CUSTOMER));
        
        otpRepo.save(otp);
        return new LoginOtpResponseDto("success", "OTP sent successfully");
    }
    
    public LoginResponseDto refreshToken(RefreshTokenRequestDto request) {
        return null;
    }
    
    public String generateOtp() {
        return RandomStringUtils.randomNumeric(6);
    }
}
