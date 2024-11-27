package com.example.order.controller;

import com.example.order.dto.OrderRequest;
import com.example.order.dto.OrderRespond;

import com.example.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor

public class OrderController {
    private final OrderService orderService;
    //Get the order by the id
    @GetMapping("/{id}")
    public ResponseEntity<OrderRespond> getOrderById(@PathVariable long id) {
        OrderRespond order = orderService.getOrderById(id);
        return ResponseEntity.ok(order);
    }

    //Get all order
    @GetMapping
    public ResponseEntity<List<OrderRespond>> getAllOrders() {
        List<OrderRespond> order = orderService.getAllOrders();
        return ResponseEntity.ok(order);
    }

    //Create a new order
    @PostMapping
    public ResponseEntity<OrderRequest> createOrder(@RequestBody OrderRequest orderRequest){
        orderService.createOrder(orderRequest);
        return ResponseEntity.ok(orderRequest);
    }

    //Update order by id
    @PatchMapping("/{id}")
    public ResponseEntity<OrderRequest> updateOrder(@PathVariable Long id, @RequestBody OrderRequest orderRequest){
        orderService.updateOrder(id,orderRequest);
        return ResponseEntity.ok(orderRequest);
    }

    //Delete order by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable long id){
        orderService.deleteOrder(id);
        return ResponseEntity.ok("order deleted successfully");
    }

}
