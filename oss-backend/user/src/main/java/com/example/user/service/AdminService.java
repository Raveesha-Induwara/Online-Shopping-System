package com.example.user.service;

import com.example.user.common.ErrorUserResponse;
import com.example.user.common.SuccessAdminResponse;
import com.example.user.common.UserResponse;
import com.example.user.dto.AdminDto;
import com.example.user.dto.AdminResponseDto;
import com.example.user.model.Admin;
import com.example.user.repo.AdminRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepo adminRepo;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public List<AdminResponseDto> getAllAdmins() {
        List<Admin> adminList = adminRepo.findAll();
        return modelMapper.map(adminList, new TypeToken<List<AdminResponseDto>>(){}.getType());
    }
    
    public AdminDto createAdmin(AdminDto adminDto) {
        Admin admin = adminRepo.getAdminByEmail(adminDto.getEmail());
        if(admin != null) {
            throw new RuntimeException(adminDto.getEmail() + " mail already registered");
        }
        adminRepo.save(modelMapper.map(adminDto, Admin.class));
        return adminDto;
    }
    
    public String deleteAdmin(String email) {
        Admin admin = adminRepo.getAdminByEmail(email);
        if(admin == null) {
            return (email + " mail not found");
        }
        adminRepo.delete((Admin)admin);
        return "admin deleted";
    }
    
    public UserResponse getAdminByEmail(String email) {
        try{
            Admin admin = adminRepo.getAdminByEmail(email);
            return new SuccessAdminResponse(modelMapper.map(admin, AdminResponseDto.class));
        } catch (Exception e) {
            return new ErrorUserResponse("Email not found");
        }
    }
}
