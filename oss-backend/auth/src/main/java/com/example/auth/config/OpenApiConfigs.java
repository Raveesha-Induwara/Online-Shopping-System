package com.example.auth.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@OpenAPIDefinition
@Configuration
public class OpenApiConfigs {
    @Bean
    public OpenAPI customOpenAPI() {
        Server server = new Server();
        server.setUrl("http://localhost:8081");
        server.setDescription("Development");
        
        Info information = new Info()
                                   .title("Auth Service")
                                   .version("v1.0.0")
                                   .description("Documentation Auth Service");
        
        final String securitySchemeName = "bearerAuth";
        
        return new OpenAPI()
                       .components(
                               new Components()
                                       .addSecuritySchemes(
                                               securitySchemeName,
                                               new SecurityScheme()
                                                       .type(SecurityScheme.Type.HTTP)
                                                       .scheme("bearer")
                                                       .bearerFormat("JWT")))
                       .security(List.of(new SecurityRequirement().addList(securitySchemeName)))
                       .servers(List.of(server))
                       .info(information);
    }
}
