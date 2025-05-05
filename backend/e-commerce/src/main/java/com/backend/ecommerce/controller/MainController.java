package com.backend.ecommerce.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.ecommerce.entity.Product;
import com.backend.ecommerce.service.ProductService;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class MainController {

	private final ProductService productService; 	
	
	public MainController(ProductService productService) {
		this.productService = productService;
	}
	
	@GetMapping
	public List<Product> getAllProducts(@RequestParam(required = false) String search){
		return productService.getAllProducts(search);
	}
	
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable Long id) {
		return productService.getProductById(id);
	}
}
