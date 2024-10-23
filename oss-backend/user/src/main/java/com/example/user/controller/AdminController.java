package com.example.user.controller;

import com.example.user.dto.AdminDto;
import com.example.user.model.Admin;
import com.example.user.service.AdminService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(value = "api/v1/admins")
public class AdminController {
    @Autowired
    private AdminService adminService;
    
    @GetMapping("/getadmins")
    public List<Admin> getAdmins() {
        return adminService.getAllAdmins();
    }
    
    @PostMapping("/addadmin")
    public AdminDto createAdmin(@Valid @RequestBody AdminDto adminDto) {
        return adminService.createAdmin(adminDto);
    }

    @DeleteMapping("/deleteadmin")
    public String deleteAdmin(@Param(value = "email") String email) {
        return adminService.deleteAdmin(email);
    }
    
    @GetMapping("/getadmin")
    public Optional<Admin> getAdminByEmail(@Param(value = "email") String email) {
        return adminService.getAdminByEmail(email);
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
