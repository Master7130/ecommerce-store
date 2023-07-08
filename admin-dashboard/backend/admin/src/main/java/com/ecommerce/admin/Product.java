package com.ecommerce.admin;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("products")
public class Product {
    @Id private Integer id;
    private String name;
    private String image_url;
    private String description;
    private String category;
    private Integer quantity;
    private Float price;
    private Timestamp date_created;
    private Timestamp date_modified;
}
