package com.example.auth.service;

import com.example.auth.repo.ClientCredentialRepo;
import com.example.auth.model.ClientCredential;
import com.example.user.model.Customer;
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
@Qualifier("customUserDetailsService")
public class CustomerUserDetailsService implements UserDetailsService {
    private final WebClient userWebClient;
    
    @Autowired
    private ClientCredentialRepo clientCredentialRepo;
    
    public CustomerUserDetailsService(WebClient userWebClient) {
        this.userWebClient = userWebClient;
    }
    
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer userDetails = userWebClient.get()
                                      .uri(uriBuilder -> uriBuilder
                                      .path("/getuser")
                                      .queryParam("email", email)
                                      .build())
                                      .retrieve()
                                      .bodyToMono(Customer.class)
                                      .block();
        
        if (userDetails == null) {
            throw new UsernameNotFoundException("user not found with email " + email);
        }
        
        ClientCredential user = clientCredentialRepo.findByUserId(userDetails.getCustomerId());
        
        //      In here I'm not making this application role based therefore, I don't need Authority
        //      because of that, create empty granted authority
        List<GrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new Role(user.getUserType().name()));
        return new org.springframework.security.core.userdetails.User(userDetails.getEmail(), user.getPassword(), authorities);
    }
}
