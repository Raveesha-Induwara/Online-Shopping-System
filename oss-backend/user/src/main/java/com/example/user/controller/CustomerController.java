package com.example.user.controller;

import com.example.user.common.UserResponse;
import com.example.user.dto.CustomerDto;
import com.example.user.dto.CustomerUpdateDto;
import com.example.user.model.Customer;
import com.example.user.service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(value = "api/v1/customers")
@CrossOrigin()
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    
    @GetMapping("/getusers")
    public ResponseEntity<List<Customer>> getUsers() {
        return new ResponseEntity<>(customerService.getAllUsers(), HttpStatus.OK);
    }
    
    @PostMapping("/adduser")
    public ResponseEntity<CustomerDto> createUser(@Valid @RequestBody CustomerDto customerDto) {
        return new ResponseEntity<>(customerService.createUser(customerDto), HttpStatus.CREATED);
    }
    
    @PatchMapping("/updateuser")
    public ResponseEntity<UserResponse> updateUser(@Valid @RequestBody CustomerUpdateDto customerUpdateDto) {
        return new ResponseEntity<>(customerService.updateUser(customerUpdateDto), HttpStatus.OK);
    }
    
    @GetMapping("/getuser")
    public ResponseEntity<Optional<Customer>> getUserByEmail(@Param(value = "email") String email) {
        return new ResponseEntity<>(customerService.getUserByEmail(email), HttpStatus.OK);
    }
    
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        
        Map<String, String> errors = new HashMap<>();
        
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError)error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        return errors;
    }
}
