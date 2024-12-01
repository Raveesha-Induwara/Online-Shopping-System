package com.example.cart.controller;

import com.example.cart.dto.CartItemDto;
import com.example.cart.dto.RequestDto;
import com.example.cart.dto.UpdateCartDto;
import com.example.cart.service.CartService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/carts")
public class CartController {
    
    @Autowired
    private CartService cartService;
    
    @PostMapping("/addItem")
    public String addCartItem(@Valid @RequestBody RequestDto requestDto) {
        return cartService.addCartItem(requestDto);
    }
    
    @GetMapping("/getCart/{userId}")
    public List<CartItemDto> viewCart(@PathVariable String userId) {
        return cartService.viewCart(userId);
    }
    
    @PatchMapping("/updateQuantity")
    public String updateItem(@Valid @RequestBody UpdateCartDto updateCartDto) {
        return cartService.updateItem(updateCartDto);
    }
    
    @DeleteMapping("/delete/{userId}/{productId}")
    public String deleteItem(@PathVariable String userId, @PathVariable Long productId) {
        return cartService.deleteItem(userId, productId);
    }
    
    @DeleteMapping("/delete/{userId}")
    public String deleteCart(@PathVariable String userId) {
        return cartService.deleteCart(userId);
    }
}
