package com.example.payment.service.serviceIMPL;

import com.example.payment.dto.OrderDTO;
import com.example.payment.dto.response.PaymentResponse;
import com.example.payment.exception.PaymentException;
import com.example.payment.exception.PaymentProcessingException;
import com.example.payment.repo.PaymentRepo;
import com.example.payment.service.PaymentService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceIMPL implements PaymentService {

    @Autowired
    private PaymentRepo paymentRepo;

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    //create payment checkout link
    //input order details
    //output stripe session link
    @Override
    public PaymentResponse createPaymentLink(OrderDTO orderDTO) {
        try {
            Stripe.apiKey = stripeSecretKey;
            String YOUR_DOMAIN = "http://localhost:4242";

            SessionCreateParams params = SessionCreateParams.builder().addPaymentMethodType(
                            SessionCreateParams.
                                    PaymentMethodType.CARD). //define only card payment
                    setMode(SessionCreateParams.Mode.PAYMENT). //define for one time payment only
                    setSuccessUrl(YOUR_DOMAIN + "?success=true"). // success url
                    setCancelUrl(YOUR_DOMAIN + "?canceled=true"). //failed url
                    addLineItem(SessionCreateParams.LineItem.builder().
                            setQuantity(1L).setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                    .setCurrency("USD")
                                    .setUnitAmount((long) orderDTO.getTotalAmount() * 100)
                                    .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                            .setName("Total Amount").build())
                                    .build()
                            )
                            .build()
                    ).build();
            Session session = Session.create(params);
            PaymentResponse response = new PaymentResponse();
            response.setPayment_url(session.getUrl());
            return response;
        } catch (StripeException e) {
            throw new PaymentException("Failed to create payment session. Please verify the input and try again",e);
        } catch (Exception e) {
            throw new PaymentProcessingException("An unexpected error occurred while processing payment.",e);
        }

    }
}
