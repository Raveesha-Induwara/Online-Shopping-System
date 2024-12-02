package com.example.cart.service;

import com.example.cart.dto.CartItemDto;
import com.example.cart.dto.RequestDto;
import com.example.cart.dto.UpdateCartDto;
import com.example.cart.exception.types.CartNotFoundException;
import com.example.cart.exception.types.ItemNotFoundException;
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
import java.util.concurrent.atomic.AtomicBoolean;

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
            return "Existing cart updated successfully";
        }
        
        // Create a new Cart and add the CartItem
        Cart newCart = new Cart();
        newCart.setUserId(requestDto.getUserId());
        newCart = cartRepo.save(newCart);
        
        CartItem cartItem = modelMapper.map(cartItemDto, CartItem.class);
        cartItem.setCart(newCart); // Set the Cart object
        cartItemRepo.save(cartItem);
        return "New cart added successfully";
    }
    
    public String updateItem(UpdateCartDto updateCartDto) {
        Optional<Cart> cart = cartRepo.findByUserId(updateCartDto.getUserId());
        AtomicBoolean isUpdated = new AtomicBoolean(false);
        
        if (cart.isPresent()) {
            cart.get().getCartItem().forEach(cartItem -> {
                if (cartItem.getProductId() == updateCartDto.getProductId()) {
                    isUpdated.set(true);
                    cartItem.setQuantity(updateCartDto.getQuantity());
                }
            });
            cartRepo.save(cart.get());
            
            if(isUpdated.get()) {
                return "Item quantity updated successfully";
            } else {
                throw new ItemNotFoundException("Item not found in the cart!");
            }
        } else {
            throw new CartNotFoundException("Cart not find for given user ID!");
        }
    }
    
    public List<CartItemDto> viewCart(String userId) {
        Optional<Cart> cart = cartRepo.findByUserId(userId);
        if (cart.isPresent()) {
            List<CartItemDto> cartItemDtoList = new ArrayList<>();
            cart.get().getCartItem().forEach(cartItem -> {
                cartItemDtoList.add(modelMapper.map(cartItem, CartItemDto.class));
            });
            
            return cartItemDtoList;
        } else {
            throw new CartNotFoundException("Cart not find for given user ID!");
        }
    }
    
    public String deleteItem(String userId, Long productId) {
        Optional<Cart> cart = cartRepo.findByUserId(userId);
        AtomicBoolean isDeleted = new AtomicBoolean(false);
       
        if(cart.isPresent()) {
            cart.get().getCartItem().forEach(cartItem -> {
                if (cartItem.getProductId() == productId) {
                    isDeleted.set(true);
                    cartItemRepo.deleteCartItem(cart.get().getId(), productId);
                }
            });
            if(isDeleted.get()) {
                return "Item deleted successfully";
            } else {
                throw new ItemNotFoundException("Item not found in the cart!");
            }
        } else {
            throw new CartNotFoundException("Cart not find for given user ID!");
        }
    }
    
    public String deleteCart(String userId) {
        Optional<Cart> cart = cartRepo.findByUserId(userId);
        
        if(cart.isPresent()) {
            cartRepo.deleteById(cart.get().getId());
            return "Cart deleted successfully";
        } else {
            throw new CartNotFoundException("Cart not found!");
        }
    }
}
