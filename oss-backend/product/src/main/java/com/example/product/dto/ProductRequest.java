package com.example.product.dto;

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
    private String product_name;
    private String product_description;
    private String product_category;
    private Integer product_price;
}
