package com.example.auth.service;

import com.example.auth.config.JWTConstant;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class AuthService {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    private final SecretKey secretKey = Keys.hmacShaKeyFor(JWTConstant.SECRETE_KEY.getBytes());
    
    public String generateToken(String email) {
        return Jwts.builder()
                       .claim("email", email)
                       .issuedAt(new Date(System.currentTimeMillis()))
                       .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
                       .signWith(secretKey)
                       .compact();
    }
    
    public Authentication authenticate(String email, String password) throws BadCredentialsException, UsernameNotFoundException {
        try{
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Invalid email or password", e);
        }
        catch (UsernameNotFoundException e) {
            throw new UsernameNotFoundException("user not found with email: ", e);
        }
    }
    
    public String getEmailFromToken(String token) {
        token = token.substring(7);
        Claims claims = Jwts.parser()
                                .verifyWith(secretKey)
                                .build()
                                .parseSignedClaims(token)
                                .getPayload();
        
        return String.valueOf(claims.get("email"));
    }
}
