package com.example.order;

import com.example.cart.dto.CartItemDto;
import com.example.order.dto.OrderRequest;
import com.example.order.model.Order;
import com.example.order.repository.OrderRepo;
import com.example.order.service.WebClientService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class OrderApplicationTests {
    //Get the assign port
    @LocalServerPort
    private int port;
    //use for the http request
    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private OrderRepo orderRepo;

    @MockBean
    private WebClientService webClientService; // Mock WebClientService to avoid real HTTP calls

    // Define the base URL to make requests to the API
    private String getBaseUrl(){
        return "http://localhost:" + port + "/api/v1/orders";
    }

    @Test
    void testCreateOrder() {

        // Create the OrderRequest with valid data
        OrderRequest orderRequest = OrderRequest.builder()
                .userId("03")
                .totalAmount(1000.00)
                .build();

        // Mock the response for getCartItems to avoid actual HTTP calls
        CartItemDto cartItemDto = new CartItemDto(); // Mocked cart item response
        cartItemDto.setProductId(Long.valueOf("01"));
        cartItemDto.setName("Product 1");
        cartItemDto.setPrice(100.00);
        cartItemDto.setQuantity(1);
        List<CartItemDto> cartItems = List.of(cartItemDto);

        Mockito.when(webClientService.getCartItems("03")).thenReturn(cartItems);
        Mockito.doNothing().when(webClientService).deleteCart("03");

        HttpHeaders headers = new HttpHeaders();
        //convert the type to JSON
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<OrderRequest> request = new HttpEntity<>(orderRequest, headers);

        // Send POST request to create the order
        ResponseEntity<String> response = restTemplate.postForEntity(getBaseUrl(), request, String.class);

        // Assert response status code is 200
        assertEquals(HttpStatus.OK, response.getStatusCode(), "Expect status code to be OK");

        // Assert the response body contains the order creation message and order ID
        assertNotNull(response.getBody(), "Response body should not be null");
        assertTrue(response.getBody().contains("order created with id: "), "Response should contain order creation message");

        // Check the order is actually created in the database
        Order createdOrder = orderRepo.findAll().stream()
                .filter(o -> "03".equals(o.getUserId()))
                .findFirst()
                .orElse(null);

        assertNotNull(createdOrder, "Created order should not be null");
        assertEquals("03", createdOrder.getUserId(), "Order userId should match");

        // Delete the created order from the database
        orderRepo.delete(createdOrder);
    }

    @Test
    void testGetOrderById() {
        // Create and save an order
        Order order = Order.builder()
                .orderId(Long.valueOf("02"))
                .orderStatus("PENDING")
                .totalAmount(1500.00)
                .build();
        Order savedOrder = orderRepo.save(order);

        // Construct the URL to fetch the order by ID
        String url = getBaseUrl() + "/" + savedOrder.getOrderId();

        // Perform GET request to fetch the order by ID
        ResponseEntity<Order> response = restTemplate.getForEntity(url, Order.class);

        // Assert response status and validate the returned order
        assertEquals(HttpStatus.OK, response.getStatusCode(), "Expected status code to be OK");
        assertNotNull(response.getBody(), "Response body should not be null");
        assertEquals(savedOrder.getOrderId(), response.getBody().getOrderId(), "Order userId should match");
        assertEquals(savedOrder.getOrderStatus(), response.getBody().getOrderStatus(), "Order status should match");
        assertEquals(savedOrder.getTotalAmount(), response.getBody().getTotalAmount(), "Order total amount should match");

        // Clean up the test data
        orderRepo.delete(savedOrder);
    }


    @Test
    void testGetAllOrders() {
        // Add a order
        Order order = Order.builder()
                .orderId(Long.valueOf("02"))
                .orderStatus("PENDING")
                .totalAmount(1500.00)
                .build();
        Order savedOrder = orderRepo.save(order);

        ResponseEntity<Order[]> response = restTemplate.getForEntity(getBaseUrl(), Order[].class);

        // Assert response status and verify the created product exists
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        // Verify all products are returned in the response
        assertTrue(Arrays.stream(Objects.requireNonNull(response.getBody()))
                .anyMatch(Objects::nonNull), "Response body should contain at least one non-null product");
        // Clean up
        orderRepo.delete(savedOrder);
    }


    @Test
    void testDeleteOrder() {
        //Create a new order
        Order order = Order.builder()
                .userId("01")
                .orderStatus("PENDING")
                .totalAmount(1000.00)
                .build();
        //save the order to the database
        orderRepo.save(order);

        String url = getBaseUrl() + "/" + order.getOrderId();
        // DELETE http request
        restTemplate.delete(url);
        //check for particular order exist after the deletion
        assertFalse(orderRepo.existsById(order.getOrderId()));
    }
}
