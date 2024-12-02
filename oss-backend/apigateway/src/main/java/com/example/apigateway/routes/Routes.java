package com.example.apigateway.routes;

import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import lombok.extern.slf4j.Slf4j;

@EnableDiscoveryClient
@Configuration
@Slf4j
public class Routes {


    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        log.info("Configuring gateway routes...");
        RouteLocator routeLocator = builder.routes()
                .route("auth-service", r -> r.path("/auth-service/v3/api-docs").uri("lb://auth"))
                .route("cart-service", r -> r.path("/cart-service/v3/api-docs").uri("lb://cart"))
                .route("delivery-service", r -> r.path("/delivery-service/v3/api-docs").uri("lb://delivery"))
                .route("inventory-service", r -> r.path("/inventory-service/v3/api-docs").uri("lb://inventory"))
                .route("order-service", r -> r.path("/order-service/v3/api-docs").uri("lb://order"))
                .route("payment-service", r -> r.path("/payment-service/v3/api-docs").uri("lb://payment-service"))
                .route("product-service", r -> r.path("/product-service/v3/api-docs").uri("lb://product"))
                .route("user-service", r -> r.path("/user-service/v3/api-docs").uri("lb://user"))
                .route("product-service", r -> r.path("/api/v1/products").uri("lb://product"))


                .route("payment-service", r -> r.path("/api/v1/payments").uri("lb://payment-service"))
                .route("payment-service", r -> r.path("/api/v1/payments/{id}").uri("lb://payment-service"))
                .route("payment-service", r -> r.path("/api/v1/payments/link").uri("lb://payment-service"))
                .route("payment-service", r -> r.path("/api/v1/payments/page/{pageNo}").uri("lb://payment-service"))
                .build();
        log.info("Gateway routes configured successfully.");
        return routeLocator;
    }
}