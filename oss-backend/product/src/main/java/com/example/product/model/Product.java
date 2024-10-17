package com.example.product.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
//Table name has assigned
@Table(name = "product")
public class Product {
    @Id
    //Auto generating id for the item
    @GeneratedValue(strategy = GenerationType.AUTO)
    //Column values for the product table
    private long id;
    private String productName;
    private String productDescription;
    private String productCategory;
    private int productPrice;
}
