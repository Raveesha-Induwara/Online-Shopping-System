package com.example.cart.repo;

import com.example.cart.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CartItemRepo extends JpaRepository<CartItem, Long> {
    
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM cart_item WHERE cart_id = ?1 AND product_id = ?2", nativeQuery = true)
    void deleteCartItem(Long cartId, Long productId);
}
