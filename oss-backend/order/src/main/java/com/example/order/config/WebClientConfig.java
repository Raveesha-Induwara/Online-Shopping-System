package com.example.order.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Bean
    @LoadBalanced
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
    
    @Bean
    public WebClient cartWebClient(WebClient.Builder builder) {
        return builder.baseUrl("http://cart/api/v1/carts").build();
    }

    @Bean
    public WebClient paymentWebClient(WebClient.Builder builder){
        return builder.baseUrl("http://payment-service/api/v1/payments").build();
    }
}
