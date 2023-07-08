package com.ecommerce.admin;

import com.ecommerce.admin.Product;

import reactor.core.publisher.Flux;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ProductRepository extends ReactiveCrudRepository<Product, Integer> {
    @Query(value = """
            SELECT *
            FROM PRODUCTS
            """)
    Flux<Product> findProducts();
}
