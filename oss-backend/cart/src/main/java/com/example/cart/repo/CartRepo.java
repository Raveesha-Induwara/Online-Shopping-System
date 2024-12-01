package com.example.cart.repo;

import com.example.cart.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepo extends JpaRepository<Cart, Long> {
    
    Optional<Cart> findByUserId(String userId);
}
