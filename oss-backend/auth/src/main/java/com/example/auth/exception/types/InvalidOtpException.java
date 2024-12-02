package com.example.auth.exception.types;

public class InvalidOtpException extends RuntimeException{
    public InvalidOtpException(){
        super();
    }
    
    public InvalidOtpException(String message){
        super(message);
    }
}
