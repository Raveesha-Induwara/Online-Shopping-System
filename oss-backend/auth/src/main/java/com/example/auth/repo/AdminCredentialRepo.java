package com.example.auth.repo;

import com.example.auth.model.AdminCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminCredentialRepo extends JpaRepository<AdminCredential, Integer> {
    
    AdminCredential findByUserId(String userId);
}
