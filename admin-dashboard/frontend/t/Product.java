package com.admin.products;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("Products")
public class Product {
    @Id
    private Long id;
    private String name;
    private String image_url;
    private String description;
    private String category;
    private int quantity;
    private float price;
    private int reviews;
    private LocalDateTime date_created;
    private LocalDateTime date_modified;
}
