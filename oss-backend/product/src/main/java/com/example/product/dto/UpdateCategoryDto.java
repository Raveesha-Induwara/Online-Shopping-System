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
public class UpdateCategoryDto {
    
    @NotNull(message = "Category id is required")
    private long id;
    
    @NotNull(message = "Category name is required")
    private String name;
    
    @NotNull(message = "Category description is required")
    private String description;
}
