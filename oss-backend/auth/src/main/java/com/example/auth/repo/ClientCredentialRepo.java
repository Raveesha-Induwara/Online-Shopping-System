package com.example.auth.repo;

import com.example.auth.model.ClientCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientCredentialRepo extends JpaRepository<ClientCredential, Integer> {

//    @Query(value = "SELECT * FROM ClientPassword WHERE userId = ?1", nativeQuery = true)
//    ClientCredential findByClientId(String userId);
    
    ClientCredential findByUserId(String userId);
}
