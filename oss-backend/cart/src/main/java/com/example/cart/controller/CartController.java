package com.example.cart.controller;

import com.example.cart.dto.CartItemDto;
import com.example.cart.dto.RequestDto;
import com.example.cart.dto.ResponseDto;
import com.example.cart.dto.UpdateCartDto;
import com.example.cart.service.CartService;
import jakarta.validation.Valid;
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
@RequestMapping("api/v1/carts")
public class CartController {
    
    @Autowired
    private CartService cartService;
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/addItem")
    public ResponseEntity<String> addCartItem(@Valid @RequestBody RequestDto requestDto) {
        return new ResponseEntity<>(cartService.addCartItem(requestDto), HttpStatus.CREATED);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getCart/{userId}")
    public ResponseEntity<List<CartItemDto>> viewCart(@PathVariable String userId) {
        return new ResponseEntity<>(cartService.viewCart(userId), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PatchMapping("/updateQuantity")
    public ResponseEntity<String> updateItem(@Valid @RequestBody UpdateCartDto updateCartDto) {
        return new ResponseEntity<>(cartService.updateItem(updateCartDto), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/delete/{userId}/{productId}")
    public ResponseEntity<String> deleteItem(@PathVariable String userId, @PathVariable Long productId) {
        return new ResponseEntity<>(cartService.deleteItem(userId, productId), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteCart(@PathVariable String userId) {
        return new ResponseEntity<>(cartService.deleteCart(userId), HttpStatus.OK);
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
