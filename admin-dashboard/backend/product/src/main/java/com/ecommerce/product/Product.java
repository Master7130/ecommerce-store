package com.ecommerce.product;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.lang.NonNull;
import org.springframework.data.relational.core.mapping.Table;

@Table("Products")
public class Product {
    @Id
    private Long id;
    @NonNull
    private String name;
    private String image_url;
    private String description;
    private String category;
    private int quantity;
    private float price;
    private int reviews;
    @NonNull
    private LocalDateTime date_created;
    @NonNull
    private LocalDateTime date_modified;
}
