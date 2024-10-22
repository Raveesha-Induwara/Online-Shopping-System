package com.example.user.repo;

import com.example.user.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    
    @Query(value = "SELECT * FROM Customer WHERE email = ?1", nativeQuery = true)
    Customer getUserByEmail(String email);
}
