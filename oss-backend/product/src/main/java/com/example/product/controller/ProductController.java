package com.example.product.controller;

import com.example.product.dto.ProductRequest;
import com.example.product.dto.ProductRespond;
import com.example.product.model.Product;
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
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<ProductRespond> getProductById(@PathVariable long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("category/{category}")
    public ResponseEntity<List<Product>> getProductByCategory(@PathVariable String category) {
        return ResponseEntity.ok(productService.getProductByCategory(category));
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity<List<ProductRespond>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<ProductRequest> createProduct(@Valid @RequestBody ProductRequest productRequest){
        productService.createProduct(productRequest);
        return ResponseEntity.ok(productRequest);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PatchMapping("/{id}")
    public ResponseEntity<ProductRequest> updateProduct(@Valid @PathVariable Long id,@RequestBody ProductRequest productRequest){
        productService.updateProduct(id,productRequest);
        return ResponseEntity.ok(productRequest);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
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
