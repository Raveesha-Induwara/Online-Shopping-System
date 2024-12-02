package com.example.product.service;

import com.example.inventory.dto.InventoryDto;
import com.example.product.dto.ProductRequest;
import com.example.product.dto.ProductRespond;
import com.example.product.exception.type.ProductNotFoundException;
import com.example.product.exception.type.ProductServiceException;
import com.example.product.exception.type.WebClientException;
import com.example.product.model.Product;
import com.example.product.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ProductService {
    
    private final WebClient inventoryWebClient;

    @Autowired
    private ProductRepository productRepository;
    
    public ProductService(WebClient inventoryWebClient) {
        this.inventoryWebClient = inventoryWebClient;
    }

    // Create product service
    @Transactional
    public void createProduct(ProductRequest request) {
        try {
            Product product = Product.builder()
                    .product_name(request.getProduct_name())
                    .product_description(request.getProduct_description())
                    .product_category(request.getProduct_category())
                    .product_price(request.getProduct_price())
                    .build();
            productRepository.save(product);
            log.info("Product created with ID: {}", product.getId());
            
            // Add inventory for the product
            InventoryDto inventoryDto = new InventoryDto();
            inventoryDto.setProductId(product.getId());
            inventoryDto.setQuantity(request.getProduct_quantity());
            
            try {
                inventoryWebClient.post()
                        .uri(uriBuilder -> uriBuilder.path("/addinventory").build())
                        .bodyValue(inventoryDto)
                        .retrieve()
                        .bodyToMono(InventoryDto.class)
                        .block();
            } catch (WebClientResponseException e) {
                if(e.getStatusCode().is5xxServerError()) {
                    throw new WebClientException("Failed to call Inventory WebClient", e);
                }
            }
            
        } catch (Exception e) {
            log.error("Error occurred while creating product", e);
            throw new ProductServiceException("Failed to create product", e);
        }
    }

    // Get all products service
    public List<ProductRespond> getAllProducts() {
        try {
            List<Product> products = productRepository.findAll();
            return products.stream()
                    .map(this::mapToProductResponse)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            log.error("Error occurred while retrieving all products", e);
            throw new ProductServiceException("Failed to retrieve all products", e);
        }
    }

    // Get product by ID service
    public ProductRespond getProductById(Long id) {
        try {
            Product product = productRepository.findById(id)
                    .orElseThrow(() -> new ProductNotFoundException("Product not found with ID: " + id));
            return mapToProductResponse(product);
        } catch (ProductNotFoundException e) {
            log.error(e.getMessage(), e);
            throw e; // Re-throw custom exception
        } catch (Exception e) {
            log.error("Error occurred while retrieving product with ID: {}", id, e);
            throw new ProductServiceException("Failed to retrieve product with ID: " + id, e);
        }
    }

    // Update product service
    @Transactional
    public void updateProduct(Long id, ProductRequest request) {
        try {
            Product existingProduct = productRepository.findById(id)
                    .orElseThrow(() -> new ProductNotFoundException("Product not found with ID: " + id));

            if (request.getProduct_name() != null) {
                existingProduct.setProduct_name(request.getProduct_name());
            }
            if (request.getProduct_description() != null) {
                existingProduct.setProduct_description(request.getProduct_description());
            }
            if (request.getProduct_category() != null) {
                existingProduct.setProduct_category(request.getProduct_category());
            }
            if (request.getProduct_price() != null) {
                existingProduct.setProduct_price(request.getProduct_price());
            }
            
            // Update inventory for the product
            InventoryDto inventoryDto = new InventoryDto();
            inventoryDto.setProductId(id);
            inventoryDto.setQuantity(request.getProduct_quantity());
            
            try {
                inventoryWebClient.patch()
                        .uri(uriBuilder -> uriBuilder.path("/").build())
                        .bodyValue(inventoryDto)
                        .retrieve()
                        .bodyToMono(InventoryDto.class)
                        .block();
            } catch (WebClientResponseException e) {
                if(e.getStatusCode().is5xxServerError()) {
                    throw new WebClientException("Failed to call Inventory WebClient", e);
                }
            }

            productRepository.save(existingProduct);
            log.info("Product updated with ID: {}", id);
        } catch (ProductNotFoundException e) {
            log.error(e.getMessage(), e);
            throw e;
        } catch (Exception e) {
            log.error("Error occurred while updating product with ID: {}", id, e);
            throw new ProductServiceException("Failed to update product with ID: " + id, e);
        }
    }

    // Delete product service
    @Transactional
    public void deleteProduct(Long id) {
        try {
            if (!productRepository.existsById(id)) {
                throw new ProductNotFoundException("Cannot delete, product not found with ID: " + id);
            }
            productRepository.deleteById(id);
            log.info("Product deleted with ID: {}", id);
        } catch (ProductNotFoundException e) {
            log.error(e.getMessage(), e);
            throw e;
        } catch (Exception e) {
            log.error("Error occurred while deleting product with ID: {}", id, e);
            throw new ProductServiceException("Failed to delete product with ID: " + id, e);
        }
    }

    private ProductRespond mapToProductResponse(Product product) {
        return ProductRespond.builder()
                .id(product.getId())
                .product_name(product.getProduct_name())
                .product_description(product.getProduct_description())
                .product_category(product.getProduct_category())
                .product_price(product.getProduct_price())
                .product_rate(product.getRate())
                .build();
    }
}
