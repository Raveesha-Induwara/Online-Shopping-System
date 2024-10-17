package com.example.product.repository;

import com.example.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository interface for managing Product
public interface ProductRepository extends JpaRepository<Product, Long> {
}
