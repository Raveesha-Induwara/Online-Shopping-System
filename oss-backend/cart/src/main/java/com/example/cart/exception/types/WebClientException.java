package com.example.cart.exception.types;

public class WebClientException extends RuntimeException {
    public WebClientException(String message, Throwable cause) {
        super(message, cause);
    }
}
