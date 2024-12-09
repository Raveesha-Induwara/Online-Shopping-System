package com.example.auth.repo;

import com.example.auth.model.Otp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OtpRepo extends JpaRepository<Otp, Integer> {
    
//    @Query(value = "SELECT * FROM Otp WHERE email = ?1 AND otp = ?2 AND otp_type = ?3", nativeQuery = true)
//    Otp findOtpByEmailAndOtpTypeAndOtp(String email, String otp, String otpType);
    
    Otp findByEmailAndOtpAndOtpType(String email, String otp, String otp_type);
}
