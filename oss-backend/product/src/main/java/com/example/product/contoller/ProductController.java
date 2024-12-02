package com.example.product.contoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
@RequestMapping(value = "/api/v1/products")
public class ProductController {

    @GetMapping()
    public String getProducts() {
        return "All Products";
    }
}
