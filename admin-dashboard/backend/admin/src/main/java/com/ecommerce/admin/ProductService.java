package com.ecommerce.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
 
@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
 
    @RequestMapping(value = "/products", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Product> findProducts() {
        return productRepository.findProducts();
    }
}
