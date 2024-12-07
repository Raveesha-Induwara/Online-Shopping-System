package com.example.user.repo;

import com.example.user.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface AdminRepo extends JpaRepository<Admin, Integer> {
    
    Optional<Admin> findByEmail(String email);
    
    void deleteByEmail(String email);
}
