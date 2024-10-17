package com.example.product.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRespond {
    //Fields representing the product
    private long id;
    private String productName;
    private String productDescription;
    private String productCategory;
    private int productPrice;
}
