package com.example.auth.exception.types;

public class EmailAlreadyExistException extends RuntimeException{
    public EmailAlreadyExistException() {
        super();
    }
    
    public EmailAlreadyExistException(String message) {
        super(message);
    }
}