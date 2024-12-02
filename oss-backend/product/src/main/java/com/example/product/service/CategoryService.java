package com.example.product.service;

import com.example.product.dto.CategoryDto;
import com.example.product.dto.ProductRespond;
import com.example.product.dto.UpdateCategoryDto;
import com.example.product.exception.type.ProductNotFoundException;
import com.example.product.exception.type.ProductServiceException;
import com.example.product.model.Category;
import com.example.product.model.Product;
import com.example.product.repository.CategoryRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    
    @Autowired
    private CategoryRepo categoryRepo;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }
    
    public Category getCategoryById(Long id) {
        Category category = categoryRepo.findById(id)
                                  .orElseThrow(() -> new ProductNotFoundException("Category not found with ID: " + id));
        return category;
    }
    
    public String createCategory(CategoryDto categoryDto) {
        categoryRepo.save(modelMapper.map(categoryDto, Category.class));
        return "New category created";
    }
    
    public String updateCategory(UpdateCategoryDto request) {
        Category existingCategory = categoryRepo.findById(request.getId())
                                          .orElseThrow(() -> new ProductNotFoundException("Category not found with ID: " + request.getId()));
        
        if (request.getName() != null) {
            existingCategory.setName(request.getName());
        }
        if (request.getDescription() != null) {
            existingCategory.setDescription(request.getDescription());
        }
        
        categoryRepo.save(existingCategory);
        return "Category updated";
    }
}
