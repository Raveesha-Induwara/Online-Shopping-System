package com.example.product;

import com.example.product.dto.ProductRequest;
import com.example.product.model.Product;
import com.example.product.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.Arrays;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

//run the application in the test environment and assign a random port
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductApplicationTests {

    //Get the randomly assigned port
    @LocalServerPort
    private int port;

    //use for the http request
    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ProductRepository productRepository;

    //API ENDPOINT
    private String getBaseUrl() {
        return "http://localhost:" + port + "/api/v1/products";
    }

    @Test
    void testCreateProduct() {
        // Prepare the ProductRequest object
        ProductRequest productRequest = ProductRequest.builder()
                .product_name("Laptop")
                .product_description("A high-performance laptop")
                .product_category("Electronics")
                .product_price(1500)
                .product_quantity(5)
                .build();

        // Send POST request
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON); // Ensure Content-Type is set
        HttpEntity<ProductRequest> request = new HttpEntity<>(productRequest, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(getBaseUrl(), request, String.class);

        // Assert the response status and body
        assertEquals(HttpStatus.OK, response.getStatusCode(), "Expected status code to be OK");
        assertNotNull(response.getBody(), "Response body should not be null");
        assertTrue(response.getBody().contains("Laptop"), "Response body should contain the product name 'Laptop'");

        // Validate the created product in the database
        Product createdProduct = productRepository.findAll().stream()
                .filter(p -> "Laptop".equals(p.getProduct_name())) // Avoid null pointer by checking the string first
                .findFirst()
                .orElse(null);

        // Assert that the product was created successfully
        assertNotNull(createdProduct, "Created product should not be null");
        assertEquals("Laptop", createdProduct.getProduct_name(), "Product name should match the expected value");

        // Clean up
        productRepository.delete(createdProduct);
    }

    @Test
    void testGetAllProducts() {
        // Add a product
        Product product = Product.builder()
                .product_name("Phone")
                .product_description("A smartphone")
                .product_category("Electronics")
                .product_price(500)
                .build();
        productRepository.save(product);

        ResponseEntity<Product[]> response = restTemplate.getForEntity(getBaseUrl(), Product[].class);

        // Assert response status and verify the created product exists
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        // Verify the added product exists
        boolean productExists = Arrays.stream(Objects.requireNonNull(response.getBody()))
                .filter(Objects::nonNull) // Guard against null objects
                .anyMatch(p -> "Phone".equals(p.getProduct_name())); // Match by unique name
        assertTrue(productExists, "Created product not found in the response");

        // Clean up
        productRepository.delete(product);
    }
    @Test
    void testGetProductById() {
        // Create and save a product
        Product product = Product.builder()
                .product_name("Smartwatch")
                .product_description("A smart wearable device")
                .product_category("Electronics")
                .product_price(200)
                .build();
        Product savedProduct = productRepository.save(product);

        // Construct the URL to fetch the product by ID
        String url = getBaseUrl() + "/" + savedProduct.getId();

        // Perform GET request to fetch the product by ID
        ResponseEntity<Product> response = restTemplate.getForEntity(url, Product.class);

        // Assert response status and validate the returned product
        assertEquals(HttpStatus.OK, response.getStatusCode(), "Expected status code to be OK");
        assertNotNull(response.getBody(), "Response body should not be null");
        assertEquals(savedProduct.getProduct_name(), response.getBody().getProduct_name(), "Product name should match");
        assertEquals(savedProduct.getProduct_description(), response.getBody().getProduct_description(), "Product description should match");
        assertEquals(savedProduct.getProduct_category(), response.getBody().getProduct_category(), "Product category should match");
        assertEquals(savedProduct.getProduct_price(), response.getBody().getProduct_price(), "Product price should match");

        // Clean up the test data
        productRepository.delete(savedProduct);
    }


    @Test
    void testDeleteProduct() {
        // Add a product
        Product product = Product.builder()
                .product_name("Tablet")
                .product_description("A tablet for all your needs")
                .product_category("Electronics")
                .product_price(300)
                .build();
        productRepository.save(product);

        // Delete the product
        String url = getBaseUrl() + "/" + product.getId();
        restTemplate.delete(url);

        // Verify the product is deleted
        assertFalse(productRepository.existsById(product.getId()));
    }

    @Test
    void testDeleteNonExistentProduct() {
        String nonExistentProductId = "9999"; // Assume this ID doesn't exist
        String url = getBaseUrl() + "/" + nonExistentProductId;

        // Perform the DELETE request and assert the expected response
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, null, String.class);

        // Assert that the response status is NOT_FOUND and the correct error message is returned
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().contains("Cannot delete, product not found with ID: " + nonExistentProductId));
    }

}