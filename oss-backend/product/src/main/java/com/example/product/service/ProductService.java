package com.example.product.service;

import com.example.product.dto.ProductRequest;
import com.example.product.dto.ProductRespond;
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



    //create product service
    @Transactional
    public void createProduct(ProductRequest productRequest) {
        try{
            Product product = Product.builder()
                    .productName(productRequest.getProductName())
                    .productDescription(productRequest.getProductDescription())
                    .productCategory(productRequest.getProductCategory())
                    .productPrice(productRequest.getProductPrice())
                    .build();
            productRepository.save(product);
            log.info("product created with id: {}", product.getId());
        }catch (Exception e){
            log.error(e.getMessage());
        }
    }

    //Get All product service
    public List<ProductRespond> getAllProducts() {
        try {
            List<Product> products = productRepository.findAll();
            return products.stream()
                    .map(this::mapToProductResponse)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            log.error("Error occurred while retrieving all products", e);
            throw e;
        }
    }

    public ProductRespond getProductById(Long id) {
        try {
            Product product = productRepository.findById(id)
                    .orElseThrow(() -> new Exception("Product not found with ID: " + id));
            return mapToProductResponse(product);
        } catch (Exception e) {
            log.error("Error occurred while retrieving product with ID: {}", id, e);
        }
        return null;
    }

    @Transactional
    public void updateProduct(Long id, ProductRequest productRequest) {
        try {
            Product existingProduct = productRepository.findById(id)
                    .orElseThrow(() -> new Exception("Product not found with ID: " + id));

            // Update product details
            existingProduct.setProductName(productRequest.getProductName());
            existingProduct.setProductDescription(productRequest.getProductDescription());
            existingProduct.setProductCategory(productRequest.getProductCategory());
            existingProduct.setProductPrice(productRequest.getProductPrice());

            // Save the updated product
            productRepository.save(existingProduct);
            log.info("Product updated with ID: {}", id);
        } catch (Exception e) {
            log.error("Error occurred while updating product with ID: {}", id, e);
        }
    }

    @Transactional
    public void deleteProduct(Long id) {
        try {
            if (!productRepository.existsById(id)) {
                throw new Exception("Cannot delete, Product not found with ID: " + id);
            }
            productRepository.deleteById(id);
            log.info("Product deleted with ID: {}", id);
        } catch (Exception e) {
            log.error("Error occurred while deleting product with ID: {}", id, e);

        }
    }



    private ProductRespond mapToProductResponse(Product product) {
        return ProductRespond.builder()
                .id(product.getId())
                .productName(product.getProductName())
                .productDescription(product.getProductDescription())
                .productCategory(product.getProductCategory())
                .productPrice(product.getProductPrice())
                .build();
    }
}
