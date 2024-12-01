package com.example.inventory.repo;

import com.example.inventory.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InventoryRepo extends JpaRepository<Inventory, Long> {
    
    Inventory findByProductId(Long productId);
    
//    @Query(value = "SELECT * FROM Inventory WHERE productId = :?1", nativeQuery = true)
//    Inventory findByProductId(Long productId);
}
