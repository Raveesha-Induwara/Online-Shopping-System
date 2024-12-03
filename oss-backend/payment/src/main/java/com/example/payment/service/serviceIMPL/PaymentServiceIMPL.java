package com.example.payment.service.serviceIMPL;

import com.example.payment.dto.OrderDTO;
import com.example.payment.dto.PaymentDTO;
import com.example.payment.dto.request.UpdatePaymentRequestDTO;
import com.example.payment.dto.response.PaginatedResponseItemDTO;
import com.example.payment.dto.response.PaymentResponse;
import com.example.payment.entity.Payment;
import com.example.payment.exception.CustomRuntimeException;
import com.example.payment.exception.NotFoundException;
import com.example.payment.exception.PaymentException;
import com.example.payment.exception.PaymentProcessingException;
import com.example.payment.repo.PaymentRepo;
import com.example.payment.service.PaymentService;
import com.example.payment.util.mappers.PaymentMapper;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDate;
import java.util.List;

@Service
public class PaymentServiceIMPL implements PaymentService {

    @Autowired
    private PaymentRepo paymentRepo;

    @Autowired
    private ModelMapper modelMapper;


    @Autowired
    private PaymentMapper paymentMapper;

    @Autowired
    private WebClient webClient; //to make synchronous communication

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
            throw new PaymentException("Failed to create payment session. Please verify the input and try again", e);
        } catch (Exception e) {
            throw new CustomRuntimeException("An unexpected error occurred while processing payment.", e);
        }

    }

    //save payment to database
    @Override
    public void savePayment(OrderDTO orderDTO) {
        try {
            if (!paymentRepo.existsPaymentByOrderId(orderDTO.getOrderId())) {
                Payment newPayment = new Payment(
                        LocalDate.now(),
                        0,
                        orderDTO.getOrderId(),
                        orderDTO.getCustomerId(),
                        orderDTO.getTotalAmount()
                        //   PaymentMethodType.credit_debit_cards
                );
                paymentRepo.save(newPayment);
            } else {
                throw new CustomRuntimeException("Payment has been done for given order");
            }
        } catch (Exception e) {
            throw new CustomRuntimeException("Unexpected error" + e);
        }
    }

    //get all payment details by pagination
    @Override
    public PaginatedResponseItemDTO getAllPaymentsByPage(int pageNo) {
        try {
            Page<Payment> payments = paymentRepo.findAll(PageRequest.of(pageNo, 2));
            if (!payments.isEmpty()) {
                PaginatedResponseItemDTO response = new PaginatedResponseItemDTO(
                        paymentMapper.paymentListToPaymentDTOList(payments.getContent()),
                        payments.getTotalElements()
                );


                return response;
            } else {
                throw new NotFoundException("NO any payment");
            }
        } catch (Exception e) {
            throw new CustomRuntimeException("Error : " + e);
        }
    }

    //get all payments without pagination
    @Override
    public List<PaymentDTO> getAllPayments() {
        try {
            List<Payment> paymentList = paymentRepo.findAll();
            List<PaymentDTO> paymentDTOList = paymentMapper.paymentListToPaymentDTOList(paymentList);
            if (!paymentDTOList.isEmpty()) {
                return paymentDTOList;
            } else {
                throw new NotFoundException("No any payment saved");
            }
        } catch (Exception e) {
            throw new CustomRuntimeException("Error : " + e);
        }
    }

    @Override
    public Object deletePayment(int paymentId) {
        try{
            paymentRepo.deleteById(paymentId);
            return null;
        }catch (Exception e){
            throw new CustomRuntimeException("Error : "+e);
        }
    }

    @Override
    public Object updatePayment(int paymentId, UpdatePaymentRequestDTO updatePaymentRequestDTO) {
        try{
            if(paymentRepo.existsById(paymentId)){
                Payment payment = modelMapper.map(updatePaymentRequestDTO,Payment.class);
                payment.setPaymentId(paymentId);
                paymentRepo.save(payment);

            }else {
                throw new NotFoundException("Not found user id");
            }
        }catch (Exception e){
            throw new CustomRuntimeException("Error : "+e);
        }
        return null;
    }
}
