package com.example.payment.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Entity
@Table(name = "Payments")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Payment {

    @Column(name = "date")
    private LocalDate paymentDate;

    @Id
    @Column(name = "payment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    @Column(name = "order_id",nullable = false)
    private int orderId;

    @Column(name = "customer_id",nullable = false)
    private int customerId;

    @Column(name = "amount",nullable = false)
    private double amount;

//    @Column(name = "payment_method",nullable = false)
//    private PaymentMethodType paymentMethod;

}