package com.example.user.exception.types;

public class EmailNotFoundException extends RuntimeException{
    public EmailNotFoundException(){
        super();
    }
    
    public EmailNotFoundException(String message){
        super(message);
    }
}