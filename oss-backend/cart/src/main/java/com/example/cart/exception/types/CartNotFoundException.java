package com.example.cart.exception.types;

public class CartNotFoundException extends RuntimeException{
    public CartNotFoundException(){
        super();
    }
    
    public CartNotFoundException(String message){
        super(message);
    }
}