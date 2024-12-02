package com.example.product.service;

import com.example.product.dto.ProductRequest;
import com.example.product.dto.ProductRespond;
import com.example.product.exception.type.ProductNotFoundException;
import com.example.product.exception.type.ProductServiceException;
import com.example.product.model.Product;
import com.example.product.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;

    // Create product service
    @Transactional
    public void createProduct(ProductRequest productRequest) {
        try {
            Product product = Product.builder()
                    .product_name(productRequest.getProduct_name())
                    .product_description(productRequest.getProduct_description())
                    .product_category(productRequest.getProduct_category())
                    .product_price(productRequest.getProduct_price())
                    .build();
            productRepository.save(product);
            log.info("Product created with ID: {}", product.getId());
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
    public void updateProduct(Long id, ProductRequest productRequest) {
        try {
            Product existingProduct = productRepository.findById(id)
                    .orElseThrow(() -> new ProductNotFoundException("Product not found with ID: " + id));

            if (productRequest.getProduct_name() != null) {
                existingProduct.setProduct_name(productRequest.getProduct_name());
            }
            if (productRequest.getProduct_description() != null) {
                existingProduct.setProduct_description(productRequest.getProduct_description());
            }
            if (productRequest.getProduct_category() != null) {
                existingProduct.setProduct_category(productRequest.getProduct_category());
            }
            if (productRequest.getProduct_price() != null) {
                existingProduct.setProduct_price(productRequest.getProduct_price());
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
                .build();
    }
}
