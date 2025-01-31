package com.example.product;

import com.example.product.dto.CategoryDto;
import com.example.product.dto.UpdateCategoryDto;
import com.example.product.model.Category;
import com.example.product.repository.CategoryRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.Arrays;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CategoryApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private CategoryRepo categoryRepo;

    private String getBaseUrl() {
        return "http://localhost:" + port + "/api/v1/categories";
    }

    private Category createTestCategory(String name, String description) {
        Category category = Category.builder()
                .name(name)
                .description(description)
                .build();
        return categoryRepo.save(category);
    }

    @Test
    void testCreateCategory() {
        CategoryDto categoryDto = CategoryDto.builder()
                .name("Electronics")
                .description("Category for electronic items")
                .build();

        HttpHeaders headers = new HttpHeaders();
        HttpEntity<CategoryDto> request = new HttpEntity<>(categoryDto, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(getBaseUrl(), request, String.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("New category created"));

    }
    @Test
    void testGetAllCategories() {
        Category category1 = createTestCategory("Books", "Category for books");
        Category category2 = createTestCategory("Furniture", "Category for furniture");

        ResponseEntity<Category[]> response = restTemplate.getForEntity(getBaseUrl(), Category[].class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(Arrays.stream(response.getBody()).anyMatch(c -> "Books".equals(c.getName())));
        assertTrue(Arrays.stream(response.getBody()).anyMatch(c -> "Furniture".equals(c.getName())));

        // Clean up
        categoryRepo.delete(category1);
        categoryRepo.delete(category2);
    }
    @Test
    void testGetCategoryById() {
        // Create and save a category
        Category category = Category.builder()
                .name("Clothing")
                .description("Category for clothing items")
                .build();
        Category savedCategory = categoryRepo.save(category);

        // Construct the URL to fetch the category by ID
        String url = getBaseUrl() + "/" + savedCategory.getId();

        // Perform GET request to fetch the category by ID
        ResponseEntity<Category> response = restTemplate.getForEntity(url, Category.class);

        // Assert response status and validate the returned category
        assertEquals(HttpStatus.OK, response.getStatusCode(), "Expected status code to be OK");
        assertNotNull(response.getBody(), "Response body should not be null");
        assertEquals(savedCategory.getName(), response.getBody().getName(), "Category name should match");
        assertEquals(savedCategory.getDescription(), response.getBody().getDescription(), "Category description should match");

        // Clean up the test data
        categoryRepo.delete(savedCategory);
    }


    @Test
    void testUpdateCategory() {
        Category category = createTestCategory("Home Appliances", "Old description");

        UpdateCategoryDto updateCategoryDto = UpdateCategoryDto.builder()
                .id(category.getId())
                .name("Updated Appliances")
                .description("Updated description")
                .build();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<UpdateCategoryDto> request = new HttpEntity<>(updateCategoryDto, headers);

        ResponseEntity<String> response = restTemplate.exchange(getBaseUrl(), HttpMethod.PATCH, request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Category updated"));

        Category updatedCategory = categoryRepo.findById(category.getId()).orElseThrow();
        assertEquals("Updated Appliances", updatedCategory.getName());
        assertEquals("Updated description", updatedCategory.getDescription());

        // Clean up
        categoryRepo.delete(updatedCategory);
    }

    @Test
    void testDeleteCategory() {
        Category category = createTestCategory("Furniture", "Category for furniture");

        String url = getBaseUrl() + "/" + category.getId();
        restTemplate.delete(url);

        assertFalse(categoryRepo.existsById(category.getId()));
    }


}
