package com.example.product.controller;

import com.example.product.dto.CategoryDto;
import com.example.product.dto.UpdateCategoryDto;
import com.example.product.model.Category;
import com.example.product.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService;
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
        return new ResponseEntity<>(categoryService.getCategoryById(id), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping
    public ResponseEntity<String> createCategory(@Valid @RequestBody CategoryDto categoryDto) {
        return new ResponseEntity<>(categoryService.createCategory(categoryDto), HttpStatus.CREATED);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PatchMapping
    public ResponseEntity<String> updateCategory(@Valid @RequestBody UpdateCategoryDto updateCategoryDto) {
        return new ResponseEntity<>(categoryService.updateCategory(updateCategoryDto), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable long id){
        return ResponseEntity.ok(categoryService.deleteCategory(id));
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
