package com.ecommerce.product;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductRepository extends ReactiveCrudRepository<Product, Long> {
    @Query("SELECT * FROM Products WHERE product_id = :id")
    Mono<Product> findById(Long id);
}
