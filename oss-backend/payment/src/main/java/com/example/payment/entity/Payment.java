package com.example.payment.entity;

import com.example.payment.util.enums.PaymentMethodType;
import com.example.payment.util.enums.PaymentStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Payments")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Payment {

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

    @Column(name = "payment_method",nullable = false)
    private PaymentMethodType paymentMethod;

    @Column(name = "payment_status",nullable = false)
    private PaymentStatus paymentStatus;

}
