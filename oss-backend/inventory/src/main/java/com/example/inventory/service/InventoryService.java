package com.example.inventory.service;

import com.example.inventory.dto.InventoryDto;
import com.example.inventory.model.Inventory;
import com.example.inventory.repo.InventoryRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {
    
    @Autowired
    private InventoryRepo inventoryRepo;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public List<Inventory> getAllInventory() {
        return inventoryRepo.findAll();
    }
    
    public Inventory getInventory(Long productId) {
        return inventoryRepo.findByProductId(productId);
    }
    
    public InventoryDto addInventory(InventoryDto inventoryDto) {
        inventoryRepo.save(modelMapper.map(inventoryDto, Inventory.class));
        return inventoryDto;
    }
    
    public InventoryDto updateInventory(InventoryDto inventoryDto) {
        Inventory inventory = inventoryRepo.findByProductId(inventoryDto.getProductId());
        if(inventory == null) {
            throw new RuntimeException("Product not found");
        }
        inventory.setQuantity(inventoryDto.getQuantity());
        inventoryRepo.save(modelMapper.map(inventoryDto, Inventory.class));
        return inventoryDto;
    }
}
