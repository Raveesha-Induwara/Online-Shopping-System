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
    @Id //Auto generating id for the item
    @GeneratedValue(strategy = GenerationType.AUTO) //Column values for the product table
    private long id;
    private String product_name;
    private String product_description;
    private String product_category;
    private Integer product_price;
    private String imagUrl;
    private Integer rate;
}
