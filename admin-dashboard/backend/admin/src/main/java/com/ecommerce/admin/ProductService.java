package com.ecommerce.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.admin.lib.ProductRequest;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/")
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @RequestMapping(value = "/products", produces = MediaType.TEXT_EVENT_STREAM_VALUE, method = RequestMethod.GET)
    public Flux<Product> findProducts() {
        return productRepository.findProducts();
    }

    @RequestMapping(value = "/products", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public Mono<ProductRequest> addProduct(@RequestBody ProductRequest productRequest) {
        return productRepository
                .createProduct(productRequest.getName(), productRequest.getImage_url(), productRequest.getDescription(),
                        productRequest.getCategory(), productRequest.getQuantity(), productRequest.getPrice())
                .then(Mono.just(productRequest));
    }
}
