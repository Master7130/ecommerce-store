package com.ecommerce.admin.lib;

import java.sql.Timestamp;

import org.springframework.data.relational.core.mapping.Table;
import org.springframework.lang.Nullable;

import lombok.Data;

@Data
@Table("products")
public class ProductRequest {
    private String name;
    private String image_url;
    private String description;
    private String category;
    private Integer quantity;
    private Float price;
    @Nullable private Timestamp date_created; 
    @Nullable private Timestamp date_modified;
}
