package com.example.user.exception.types;

public class EmailAlreadyFoundException extends RuntimeException{
    public EmailAlreadyFoundException(){
        super();
    }
    
    public EmailAlreadyFoundException(String message){
        super(message);
    }
}