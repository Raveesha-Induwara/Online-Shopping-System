package com.example.user.service;

import com.example.user.common.ErrorUserResponse;
import com.example.user.common.SuccessCustomerResponse;
import com.example.user.common.UserResponse;
import com.example.user.dto.CustomerDto;
import com.example.user.dto.CustomerResponseDto;
import com.example.user.dto.CustomerUpdateDto;
import com.example.user.model.Customer;
import com.example.user.repo.CustomerRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CustomerService {
    @Autowired
    private CustomerRepo customerRepo;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public List<CustomerResponseDto> getAllUsers() {
        List<Customer> userList = customerRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<CustomerResponseDto>>(){}.getType());
    }
    
    public CustomerDto createUser(CustomerDto customerDto) {
        Customer user = customerRepo.getUserByEmail(customerDto.getEmail());
        if(user != null) {
            throw new RuntimeException(customerDto.getEmail() + " mail already registered");
        }
        customerRepo.save(modelMapper.map(customerDto, Customer.class));
        return customerDto;
    }
    
    public UserResponse updateUser(CustomerUpdateDto customerUpdateDto) {
        Customer user = customerRepo.getUserByEmail(customerUpdateDto.getEmail());
        if(user == null) {
            return new ErrorUserResponse(customerUpdateDto.getEmail() + " email not found");
        }
        user.setFirstName(customerUpdateDto.getFirstName());
        user.setLastName(customerUpdateDto.getLastName());
        user.setMobileNo(customerUpdateDto.getMobileNo());
        user.setHomeNo(customerUpdateDto.getHomeNo());
        user.setStreet(customerUpdateDto.getStreet());
        user.setCity(customerUpdateDto.getCity());

        return new SuccessCustomerResponse(modelMapper.map(user, CustomerResponseDto.class));
    }
    
    public UserResponse getUserByEmail(String email) {
        try {
            Customer user = customerRepo.getUserByEmail(email);
            return new SuccessCustomerResponse(modelMapper.map(user, CustomerResponseDto.class));
        } catch (Exception e) {
            return new ErrorUserResponse("Email not found");
        }
    }
}
