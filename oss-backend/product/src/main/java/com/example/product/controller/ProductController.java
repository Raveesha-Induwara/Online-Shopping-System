package com.example.product.controller;

import com.example.product.dto.ProductRequest;
import com.example.product.dto.ProductRespond;
import com.example.product.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    //Get the product by the id
    @GetMapping("/{id}")
    public ResponseEntity<ProductRespond> getProductById(@PathVariable long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    //Get all products
    @GetMapping
    public ResponseEntity<List<ProductRespond>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    //Create a new product
    @PostMapping
    public ResponseEntity<ProductRequest> createProduct(@Valid @RequestBody ProductRequest productRequest){
        productService.createProduct(productRequest);
        return ResponseEntity.ok(productRequest);
    }

    //Update a product by id
    @PatchMapping("/{id}")
    public ResponseEntity<ProductRequest> updateProduct(@Valid @PathVariable Long id,@RequestBody ProductRequest productRequest){
        productService.updateProduct(id,productRequest);
        return ResponseEntity.ok(productRequest);
    }

    //Delete a product by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable long id){
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully");
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