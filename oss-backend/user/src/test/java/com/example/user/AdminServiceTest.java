package com.example.user;

import com.example.user.dto.AdminDto;
import com.example.user.model.Admin;
import com.example.user.repo.AdminRepo;
import com.example.user.service.AdminService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest
public class AdminServiceTest {
    
    @InjectMocks
    private AdminService adminService;
    
    @Mock
    private AdminRepo adminRepo;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void getAllAdmins_ShouldReturnAllAdminsSuccessfully() {
        Admin admin01 = new Admin();
        admin01.setAdminId("1");
        admin01.setEmail("admin01@gmail.com");
        Admin admin02 = new Admin();
        admin02.setAdminId("2");
        admin02.setEmail("admin02@gmail.com");
        Admin admin03 = new Admin();
        admin03.setAdminId("3");
        admin03.setEmail("admin03@gmail.com");
        when(adminRepo.findAll()).thenReturn(List.of(admin01, admin02, admin03));
        
        List<Admin> allAdmins = adminService.getAllAdmins();
        
        assertEquals(3, allAdmins.size());
        assertEquals("1", allAdmins.get(0).getAdminId());
        assertEquals("admin02@gmail.com", allAdmins.get(1).getEmail());
        
    }
    
    @Test
    void getAllProducts_ShouldReturnEmptyList_WhenNoAdmins() {
        when(adminRepo.findAll()).thenReturn(Collections.emptyList());
        
        List<Admin> allAdmins = adminService.getAllAdmins();
        
        assertEquals(0, allAdmins.size());
    }
    
    @Test
    void createAdmin_ShouldThrowException_WhenEmailAlreadyExists() {
        Admin admin01 = new Admin();
        admin01.setAdminId("1");
        admin01.setEmail("admin01@gmail.com");
        AdminDto adminDto = new AdminDto();
        adminDto.setAdminId("2");
        adminDto.setEmail("admin01@gmail.com");
        when(adminRepo.findByEmail("admin01@gmail.com")).thenReturn(java.util.Optional.of(admin01));
        
        assertThrows(RuntimeException.class, () -> adminService.createAdmin(adminDto));
    }
    
}
