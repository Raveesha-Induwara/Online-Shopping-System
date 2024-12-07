package com.example.product.repository;

import com.example.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

// Repository interface for managing Product
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    @Query(value = "SELECT * FROM Product WHERE product_category = ?1", nativeQuery = true)
    List<Product> findByCategory(String category);
}
