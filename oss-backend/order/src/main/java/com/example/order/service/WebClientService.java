package com.example.order.service;

import com.example.order.dto.CartItemDto;
import com.example.order.dto.PaymentResponseDTO;
import com.example.order.exception.type.WebClientException;
import jakarta.transaction.Transactional;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Collections;
import java.util.List;

@Service
public class WebClientService {
    private final WebClient paymentWebClient;
    
    private final WebClient cartWebClient;
    
    public WebClientService(WebClient cartWebClient,WebClient paymentWebClient) {
        this.cartWebClient = cartWebClient;
        this.paymentWebClient = paymentWebClient;
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

    @Transactional
    public PaymentResponseDTO getPaymentLink(double amount){
        try {
            return paymentWebClient.post()
                    .uri(uriBuilder -> uriBuilder.path("/link").build())
                    .bodyValue(Collections.singletonMap("amount", amount))
                    .retrieve()
                    .bodyToMono(PaymentResponseDTO.class)
                    .block();
        } catch (Exception e) {
            throw new WebClientException("Error occur while deleting cart", e);
        }
    }
}
