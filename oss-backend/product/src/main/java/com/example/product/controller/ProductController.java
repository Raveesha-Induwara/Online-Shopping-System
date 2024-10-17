package com.example.product.controller;


import com.example.product.dto.ProductRequest;
import com.example.product.dto.ProductRespond;
import com.example.product.service.ProductService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor

public class ProductController {
    private final ProductService productService;

    //Get the product by the id
    @GetMapping("/{id}")
    public ResponseEntity<ProductRespond> getProductById(@PathVariable long id) {
        ProductRespond product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    //Get all products
    @GetMapping
    public ResponseEntity<List<ProductRespond>> getAllProducts() {
        List<ProductRespond> product = productService.getAllProducts();
        return ResponseEntity.ok(product);
    }

    //Create a new product
    @PostMapping
    public ResponseEntity<ProductRequest> createProduct(@RequestBody ProductRequest productRequest){
        productService.createProduct(productRequest);
        return ResponseEntity.ok(productRequest);
    }

    //Update a product by id
    @PatchMapping("/{id}")
    public ResponseEntity<ProductRequest> updateProduct(@PathVariable Long id,@RequestBody ProductRequest productRequest){
        productService.updateProduct(id,productRequest);
        return ResponseEntity.ok(productRequest);
    }

    //Delete a product by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable long id){
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully");
    }



}
