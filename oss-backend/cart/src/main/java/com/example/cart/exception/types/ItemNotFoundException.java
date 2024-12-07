package com.example.cart.exception.types;

public class ItemNotFoundException extends RuntimeException{
    public ItemNotFoundException(){
        super();
    }
    
    public ItemNotFoundException(String message){
        super(message);
    }
}