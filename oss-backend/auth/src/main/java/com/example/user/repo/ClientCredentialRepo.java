package com.example.user.repo;

import com.example.user.model.ClientCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientCredentialRepo extends JpaRepository<ClientCredential, Integer> {

//    @Query(value = "SELECT * FROM ClientPassword WHERE userId = ?1", nativeQuery = true)
//    ClientCredential findByClientId(String userId);
    
    ClientCredential findByUserId(String userId);
}
