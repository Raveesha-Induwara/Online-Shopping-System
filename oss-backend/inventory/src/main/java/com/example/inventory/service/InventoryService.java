package com.example.inventory.service;

import com.example.inventory.dto.InventoryDto;
import com.example.inventory.model.Inventory;
import com.example.inventory.repo.InventoryRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {
    
    @Autowired
    private InventoryRepo inventoryRepo;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public List<Inventory> getAllInventory() {
        return inventoryRepo.findAll();
    }
    
    public Optional<Inventory> getInventory(Long productId) {
        return inventoryRepo.findByProductId(productId);
    }
    
    public InventoryDto addInventory(InventoryDto inventoryDto) {
        inventoryRepo.save(modelMapper.map(inventoryDto, Inventory.class));
        return inventoryDto;
    }
    
    public Optional<Inventory> updateInventory(InventoryDto inventoryDto) {
        Optional<Inventory> inventory = inventoryRepo.findByProductId(inventoryDto.getProductId());
        if(inventory.isEmpty()) {
            throw new RuntimeException("Product not found");
        }
        inventory.map(value -> {
            value.setQuantity(inventoryDto.getQuantity());
            return value;
        });
        inventoryRepo.save(modelMapper.map(inventory, Inventory.class));
        return inventory;
    }
}
