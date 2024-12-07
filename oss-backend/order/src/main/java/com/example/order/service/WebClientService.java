package com.example.order.service;

import com.example.cart.dto.CartItemDto;
import com.example.order.dto.OrderRequest;
import com.example.order.exception.type.WebClientException;
import jakarta.transaction.Transactional;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
public class WebClientService {
    
    private final WebClient cartWebClient;
    
    public WebClientService(WebClient cartWebClient) {
        this.cartWebClient = cartWebClient;
    }
    
    @Transactional
    public List<CartItemDto> getCartItems(String userId) {
        try {
            return cartWebClient.get()
                    .uri(uriBuilder -> uriBuilder.path("/getCart/{userId}").build(userId))
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CartItemDto>>() {})
                    .block();
        } catch (Exception e) {
            throw new WebClientException("Cart not found with given userId", e);
        }
    }
    
    @Transactional
    public void deleteCart(String userId) {
        try {
            cartWebClient.delete()
                    .uri(uriBuilder -> uriBuilder.path("/delete/{userId}").build(userId))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
        } catch (Exception e) {
            throw new WebClientException("Error occur while deleting cart", e);
        }
    }
}
