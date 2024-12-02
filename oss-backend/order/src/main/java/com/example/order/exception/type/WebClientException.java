package com.example.order.exception.type;

public class WebClientException extends RuntimeException {
    public WebClientException(String message, Throwable cause) {
        super(message, cause);
    }
}
