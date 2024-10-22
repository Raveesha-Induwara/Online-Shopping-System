package com.example.user.repo;

import com.example.user.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
    
    @Query(value = "SELECT * FROM Admin WHERE email = ?1", nativeQuery = true)
    Admin getAdminByEmail(String email);
}
