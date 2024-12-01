package com.example.cart.service;

import com.example.cart.dto.CartItemDto;
import com.example.cart.dto.RequestDto;
import com.example.cart.dto.UpdateCartDto;
import com.example.cart.model.Cart;
import com.example.cart.model.CartItem;
import com.example.cart.repo.CartItemRepo;
import com.example.cart.repo.CartRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    
    @Autowired
    private CartRepo cartRepo;
    @Autowired
    private CartItemRepo cartItemRepo;
    @Autowired
    private ModelMapper modelMapper;
    
    public String addCartItem(RequestDto requestDto) {
        CartItemDto cartItemDto = new CartItemDto();
        cartItemDto.setProductId(requestDto.getProductId());
        cartItemDto.setName(requestDto.getName());
        cartItemDto.setDescription(requestDto.getDescription());
        cartItemDto.setPrice(requestDto.getPrice());
        cartItemDto.setQuantity(requestDto.getQuantity());
        
        Optional<Cart> cart = cartRepo.findByUserId(requestDto.getUserId());
        
        if(cart.isPresent()){
            CartItem cartItem = modelMapper.map(cartItemDto, CartItem.class);
            cartItem.setCart(cart.get()); // Set the Cart object
            cartItemRepo.save(cartItem);
            return "Cart updated successfully";
        }
        
        // Create a new Cart and add the CartItem
        Cart newCart = new Cart();
        newCart.setUserId(requestDto.getUserId());
        newCart = cartRepo.save(newCart);
        
        CartItem cartItem = modelMapper.map(cartItemDto, CartItem.class);
        cartItem.setCart(newCart); // Set the Cart object
        cartItemRepo.save(cartItem);
        return "Cart added successfully";
    }
    
    public String updateItem(UpdateCartDto updateCartDto) {
        Optional<Cart> cart = cartRepo.findByUserId(updateCartDto.getUserId());
        
        if (cart.isPresent()) {
            cart.get().getCartItem().forEach(cartItem -> {
                if (cartItem.getProductId() == updateCartDto.getProductId()) {
                    cartItem.setQuantity(updateCartDto.getQuantity());
                }
            });
            cartRepo.save(cart.get());
            return "Item quantity updated successfully";
        }
        return "Item not found in the cart";
    }
    
    public List<CartItemDto> viewCart(String userId) {
        Optional<Cart> cart = cartRepo.findByUserId(userId);
        if (cart.isPresent()) {
            List<CartItemDto> cartItemDtoList = new ArrayList<>();
            cart.get().getCartItem().forEach(cartItem -> {
                cartItemDtoList.add(modelMapper.map(cartItem, CartItemDto.class));
            });
            
            return cartItemDtoList;
        }
        return null;
    }
    
    public String deleteItem(String userId, Long productId) {
        Optional<Cart> cart = cartRepo.findByUserId(userId);
       
        cart.ifPresent(value -> value.getCartItem().forEach(cartItem -> {
            if (cartItem.getProductId() == productId) {
                cartItemRepo.deleteById(cartItem.getId());
            }
        }));
        return "Item deleted successfully";
    }
    
    public String deleteCart(String userId) {
        Optional<Cart> cart = cartRepo.findByUserId(userId);
        cart.get().getCartItem().forEach(cartItem -> cartItemRepo.deleteById(cartItem.getId()));
        cart.ifPresent(value -> cartRepo.deleteById(value.getId()));
        return "Cart deleted successfully";
    }
}
