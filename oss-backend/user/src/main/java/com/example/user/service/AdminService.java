package com.example.user.service;

import com.example.user.dto.AdminDto;
import com.example.user.model.Admin;
import com.example.user.repo.AdminRepo;
import org.modelmapper.ModelMapper;
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
    
    public List<Admin> getAllAdmins() {
        return adminRepo.findAll();
    }
    
    public AdminDto createAdmin(AdminDto adminDto) {
        Optional<Admin> admin = adminRepo.findByEmail(adminDto.getEmail());
        if(admin.isPresent()) {
            throw new RuntimeException(adminDto.getEmail() + " mail already registered");
        }
        adminRepo.save(modelMapper.map(adminDto, Admin.class));
        return adminDto;
    }
    
    public String deleteAdmin(String email) {
        Optional<Admin> admin = adminRepo.findByEmail(email);
        if(admin.isEmpty()) {
            return (email + " mail not found");
        }
        adminRepo.deleteByEmail(admin.get().getEmail());
        return "admin deleted";
    }
    
    public Optional<Admin> getAdminByEmail(String email) {
        return adminRepo.findByEmail(email);
    }
}
