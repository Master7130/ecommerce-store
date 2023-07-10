package com.ecommerce.admin;

import com.ecommerce.admin.Product;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ProductRepository extends ReactiveCrudRepository<Product, Integer> {
    @Query(value = """
            SELECT *
            FROM PRODUCTS
            """)
    Flux<Product> findProducts();

    @Query("INSERT INTO PRODUCTS (name, image_url, description, category, quantity, price, date_created) " +
            "VALUES (:name, :imageUrl, :description, :category, :quantity, :price, NOW())")
    Mono<Void> createProduct(@Param("name") String name,
                           @Param("imageUrl") String imageUrl,
                           @Param("description") String description,
                           @Param("category") String category,
                           @Param("quantity") Integer quantity,
                           @Param("price") Float price);
}
