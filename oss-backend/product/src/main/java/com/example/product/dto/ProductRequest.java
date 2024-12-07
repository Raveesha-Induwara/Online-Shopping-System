package com.example.product.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    //Field Representing for product request
    @NotNull(message = "Product name is required")
    private String product_name;
    
    @NotNull(message = "Product description is required")
    private String product_description;
    
    @NotNull(message = "Product category is required")
    private String product_category;
    
    @NotNull(message = "Product price is required")
    private Integer product_price;
    
    @NotNull(message = "Product quantity is required")
    private Integer product_quantity;
    
    @NotNull(message = "Product rte is required")
    private Integer product_rate;
    
    private String product_image;
}
