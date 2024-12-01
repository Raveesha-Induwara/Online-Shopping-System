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
                    .route("payment-service", r -> r.path("/payment-service/v3/api-docs").uri("lb://payment"))
                    .route("product-service", r -> r.path("/product-service/v3/api-docs").uri("lb://product"))
                    .route("user-service", r -> r.path("/user-service/v3/api-docs").uri("lb://user"))
                    
                    .route("auth-service", r -> r.path("/api/v1/auth/signup/client/create-otp").uri("lb://auth"))
                    .route("auth-service", r -> r.path("/api/v1/auth/signup/client").uri("lb://auth"))
                    .route("auth-service", r -> r.path("/api/v1/auth/login/client").uri("lb://auth"))
                    .route("auth-service", r -> r.path("/api/v1/auth/request-otp/client").uri("lb://auth"))
                    .route("auth-service", r -> r.path("/api/v1/auth/refresh-token").uri("lb://auth"))
                    .route("auth-service", r -> r.path("/api/v1/auth/signup/admin").uri("lb://auth"))
                    .route("auth-service", r -> r.path("/api/v1/auth/login/admin").uri("lb://auth"))
                    
                    .route("user-service", r -> r.path("/api/v1/customers/getusers").uri("lb://user"))
                    .route("user-service", r -> r.path("/api/v1/customers/adduser").uri("lb://user"))
                    .route("user-service", r -> r.path("/api/v1/customers/updateuser").uri("lb://user"))
                    .route("user-service", r -> r.path("/api/v1/customers/getuser").uri("lb://user"))
                    .route("user-service", r -> r.path("/api/v1/admins/getadmins").uri("lb://user"))
                    .route("user-service", r -> r.path("/api/v1/admins/addadmin").uri("lb://user"))
                    .route("user-service", r -> r.path("/api/v1/admins/deleteadmin").uri("lb://user"))
                    .route("user-service", r -> r.path("/api/v1/admins/getadmin").uri("lb://user"))
                    
                    .route("cart-service", r -> r.path("/api/v1/carts/addItem").uri("lb://cart"))
                    .route("cart-service", r -> r.path("/api/v1/carts/updateQuantity").uri("lb://cart"))
                    .route("cart-service", r -> r.path("/api/v1/carts/getCart/{userId}").uri("lb://cart"))
                    .route("cart-service", r -> r.path("/api/v1/carts/delete/{userId}/{productId}").uri("lb://cart"))
                    .route("cart-service", r -> r.path("/api/v1/carts/delete/{userId}").uri("lb://cart"))
                    
                    .build();
        
        log.info("Gateway routes configured successfully.");
        return routeLocator;
    }
}