package com.example.auth.service;

import com.example.auth.model.AdminCredential;
import com.example.auth.repo.AdminCredentialRepo;
import com.example.auth.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

@Service
@Qualifier("adminUserDetailsService")
public class AdminUserDetailsService implements UserDetailsService {
    private final WebClient adminWebClient;
    
    @Autowired
    private AdminCredentialRepo adminCredentialRepo;
    
    public AdminUserDetailsService(WebClient adminWebClient) {
        this.adminWebClient = adminWebClient;
    }
    
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Admin adminDetails = adminWebClient.get()
                                       .uri(uriBuilder -> uriBuilder
                                       .path("/getadmin")
                                       .queryParam("email", email)
                                       .build())
                                       .retrieve()
                                       .bodyToMono(Admin.class)
                                       .block();
        
        if (adminDetails == null) {
            throw new UsernameNotFoundException("user not found with email " + email);
        }
        
        AdminCredential admin = adminCredentialRepo.findByUserId(adminDetails.getAdminId());
        
        //      In here I'm not making this application role based therefore, I don't need Authority
        //      because of that, create empty granted authority
        List<GrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new Role(user.getUserType().name()));
        return new org.springframework.security.core.userdetails.User(adminDetails.getEmail(), admin.getPassword(), authorities);
    }
}
