package com.example.user.repo;

import com.example.user.model.AdminCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminCredentialRepo extends JpaRepository<AdminCredential, Integer> {
    
    AdminCredential findByUserId(String userId);
}
