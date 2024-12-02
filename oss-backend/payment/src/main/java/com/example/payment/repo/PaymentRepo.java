package com.example.payment.repo;

import com.example.payment.entity.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface PaymentRepo extends JpaRepository<Payment,Integer> {

    boolean existsPaymentByOrderId(int orderId);


    Page<Payment> findAll(Pageable pageable);
}
