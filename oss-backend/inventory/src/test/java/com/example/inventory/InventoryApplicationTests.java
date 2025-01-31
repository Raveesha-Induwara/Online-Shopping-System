package com.example.inventory;

import com.example.inventory.dto.InventoryDto;
import com.example.inventory.model.Inventory;
import com.example.inventory.repo.InventoryRepo;
import com.sun.net.httpserver.Headers;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class InventoryApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private InventoryRepo inventoryRepo;


    private String getBaseUrl(){
        return "http://localhost:" + port + "/api/v1/inventory";
    }

    @Test
    void testCreateInventory() {
        InventoryDto inventoryDto = InventoryDto.builder()
                .productId(10L)
                .quantity(10)
                .build();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<InventoryDto> request = new HttpEntity<>(inventoryDto, headers);

        // Send POST request to create the inventory
        ResponseEntity<String> response = restTemplate.postForEntity(getBaseUrl() + "/addinventory", request, String.class);

        // Assert the response status and body
        assertEquals(HttpStatus.OK, response.getStatusCode(), "Expected status code to be OK");
        assertNotNull(response.getBody(), "Response body should not be null");
        assertTrue(response.getBody().contains("\"productId\":10"), "Response should contain productId");

        // Check the inventory is actually created in the database
        Inventory createdInventory = inventoryRepo.findAll().stream()
                .filter(i -> Objects.equals(10L, i.getProductId())) // Use Objects.equals for null-safe comparison
                .findFirst()
                .orElse(null);

        assertNotNull(createdInventory, "Created inventory should not be null");
        assertEquals(10L, createdInventory.getProductId(), "Inventory productId should match");

        // Delete the created inventory from the database
        inventoryRepo.delete(createdInventory);
    }

    @Test
    void testGetInventoryById() {
        // Prepopulate the database
        Inventory inventory =  Inventory.builder()
                .productId(10L)
                .quantity(12)
                .build();
        inventoryRepo.save(inventory);

        // Perform GET request
        ResponseEntity<Inventory> response = restTemplate.getForEntity(getBaseUrl() + "/getinventory/1", Inventory.class);

        // Assertions
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(1L, response.getBody().getProductId());
    }


}
