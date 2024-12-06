package com.example.payment.controller;

import com.example.payment.dto.OrderDTO;
import com.example.payment.dto.PaymentDTO;
import com.example.payment.dto.request.UpdatePaymentRequestDTO;
import com.example.payment.dto.response.PaginatedResponseItemDTO;
import com.example.payment.dto.response.PaymentResponse;
import com.example.payment.service.PaymentService;
import com.example.payment.dto.response.StandardResponse;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/payments")
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentService paymentService;


    //for create payment link for online payment
    //input order details
    //output stripe session link
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping ("link")
    public ResponseEntity<StandardResponse> createPaymentLink(@RequestBody OrderDTO orderDTO) throws StripeException {
        PaymentResponse response = paymentService.createPaymentLink(orderDTO);
        // return  new ResponseEntity<StandardResponse>(new StandardResponse(200,"success","hello"),HttpStatus.OK);
        return new ResponseEntity<StandardResponse>(new StandardResponse(200, "success", response), HttpStatus.OK);
    }


    //save payment details inside database
    //no input or return
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("")
    public ResponseEntity<StandardResponse> savePayment(@RequestBody OrderDTO orderDTO) {
        paymentService.savePayment(orderDTO);
        return new ResponseEntity<StandardResponse>(new StandardResponse(
                200,
                "Success",
                null), HttpStatus.CREATED);
    }

    //get all payments by paging
    //input page number
    //return payment list
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("page/{pageNo}")
    public ResponseEntity<StandardResponse> getAllPaymentsByPage(@PathVariable(value = "pageNo") int pageNo) {
        PaginatedResponseItemDTO response = paymentService.getAllPaymentsByPage(pageNo);
        return new ResponseEntity<StandardResponse>(new StandardResponse(200, "success", response), HttpStatus.OK);
    }

    //get all payments without paging
    //no input return list of paymentDTO
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("")
    public ResponseEntity<StandardResponse> getAllPayments() {
        List<PaymentDTO> payments = paymentService.getAllPayments();
        return new ResponseEntity<StandardResponse>(new StandardResponse(200, "success", payments), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("{id}")
    public ResponseEntity<StandardResponse> deletePayment(@PathVariable(value = "id") int paymentId) {
        return new ResponseEntity<StandardResponse>(new StandardResponse(200, "successfuly deleted", paymentService.deletePayment(paymentId)), HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PatchMapping("{id}")
    public ResponseEntity<StandardResponse> updatePayment(@PathVariable(value = "id") int paymentId, @RequestBody UpdatePaymentRequestDTO updatePaymentRequestDTO) {
        return new ResponseEntity<StandardResponse>(new StandardResponse(200, "successfuly updated", paymentService.updatePayment(paymentId, updatePaymentRequestDTO)),HttpStatus.OK);
    }


}
