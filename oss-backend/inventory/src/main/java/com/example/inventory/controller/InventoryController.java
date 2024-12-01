package com.example.inventory.controller;

import com.example.inventory.dto.InventoryDto;
import com.example.inventory.model.Inventory;
import com.example.inventory.service.InventoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "api/v1/inventory")
public class InventoryController {
    
    @Autowired
    private InventoryService inventoryService;
    
    @GetMapping("/inventories")
    public List<Inventory> getAllInventory() {
        return inventoryService.getAllInventory();
    }
    
    @GetMapping("/getinventory/{productId}")
    public Inventory getInventory(@PathVariable Long productId) {
        return inventoryService.getInventory(productId);
    }
    
    @PostMapping("/addinventory")
    public InventoryDto addInventory(@Valid @RequestBody InventoryDto inventoryDto) {
        return inventoryService.addInventory(inventoryDto);
    }
    
    @PatchMapping("/")
    public InventoryDto updateInventory(@Valid @RequestBody InventoryDto inventoryDto) {
        return inventoryService.updateInventory(inventoryDto);
    }
    
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        
        Map<String, String> errors = new HashMap<>();
        
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError)error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        return errors;
    }
}
