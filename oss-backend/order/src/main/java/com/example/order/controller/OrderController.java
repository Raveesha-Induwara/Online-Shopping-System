package com.example.order.controller;

import com.example.order.dto.OrderRequest;
import com.example.order.dto.OrderRespond;
import com.example.order.dto.UpdateOrderDto;
import com.example.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {
    @Autowired
    private final OrderService orderService;
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<OrderRespond> getOrderById(@PathVariable long id) {
        return ResponseEntity.ok(orderService.getOrderById(id));
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderRespond>> getOrdersByUserId(@PathVariable String userId) {
        return ResponseEntity.ok(orderService.getOrdersByUserId(userId));
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @GetMapping
    public ResponseEntity<List<OrderRespond>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PostMapping
    public ResponseEntity<String> createOrder(@RequestBody OrderRequest orderRequest){
        return ResponseEntity.ok(orderService.createOrder(orderRequest));
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @PatchMapping("/{id}")
    public ResponseEntity<String> updateOrder(@PathVariable Long id, @RequestBody UpdateOrderDto updateOrderDto){
        return ResponseEntity.ok(orderService.updateOrder(id, updateOrderDto));
    }
    
    @CrossOrigin(origins = "http://localhost:8081, http://localhost:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable long id){
        return ResponseEntity.ok(orderService.deleteOrder(id));
    }
    
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        
        Map<String, String> errors = new HashMap<>();
        
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError)error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        return errors;
    }
}
