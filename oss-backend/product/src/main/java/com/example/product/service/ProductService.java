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
                    .product_name(productRequest.getProduct_name())
                    .product_description(productRequest.getProduct_description())
                    .product_category(productRequest.getProduct_category())
                    .product_price(productRequest.getProduct_price())
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
            // Fetch the existing product from the repository
            Product existingProduct = productRepository.findById(id)
                    .orElseThrow(() -> new Exception("Product not found with ID: " + id));

            // Update product details only if they are not null
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

            // Save the updated product
            productRepository.save(existingProduct);
            log.info("Product updated with ID: {}", id);
        } catch (Exception e) {
            log.error("Error occurred while updating product with ID: {}", id, e);
            // Optionally, rethrow the exception or handle it as needed
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
                .product_name(product.getProduct_name())
                .product_description(product.getProduct_description())
                .product_category(product.getProduct_category())
                .product_price(product.getProduct_price())
                .build();
    }
}
