package com.example.user.service;

import com.example.user.common.ErrorUserResponse;
import com.example.user.common.SuccessCustomerResponse;
import com.example.user.common.UserResponse;
import com.example.user.dto.CustomerDto;
import com.example.user.dto.CustomerUpdateDto;
import com.example.user.model.Customer;
import com.example.user.repo.CustomerRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerService {
    @Autowired
    private CustomerRepo customerRepo;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public List<Customer> getAllUsers() {
        return customerRepo.findAll();
    }
    
    public CustomerDto createUser(CustomerDto customerDto) {
        Optional<Customer> user = customerRepo.findByEmail(customerDto.getEmail());
        if(user.isPresent()) {
            throw new RuntimeException(customerDto.getEmail() + " mail already registered");
        }
        customerRepo.save(modelMapper.map(customerDto, Customer.class));
        return customerDto;
    }
    
    public UserResponse updateUser(CustomerUpdateDto customerUpdateDto) {
        Optional<Customer> user = customerRepo.findByEmail(customerUpdateDto.getEmail());
        if(user.isPresent()) {
            user.map(value -> {
                value.setFirstName(customerUpdateDto.getFirstName());
                value.setLastName(customerUpdateDto.getLastName());
                value.setMobileNo(customerUpdateDto.getMobileNo());
                value.setHomeNo(customerUpdateDto.getHomeNo());
                value.setStreet(customerUpdateDto.getStreet());
                value.setCity(customerUpdateDto.getCity());
                return value;
            });
            
            return new SuccessCustomerResponse(user);
        }
        return new ErrorUserResponse(customerUpdateDto.getEmail() + " email not found");
    }
    
    public Optional<Customer> getUserByEmail(String email) {
        return customerRepo.findByEmail(email);
    }
}
