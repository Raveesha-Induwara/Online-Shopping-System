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
    private String productName;
    private String productDescription;
    private String productCategory;
    private int productPrice;
}
