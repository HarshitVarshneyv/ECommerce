package com.backend.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product , Long>{

	@Query( "SELECT p FROM Product p WHERE " +
			"LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
			"LOWER(p.brand) LIKE LOWER(CONCAT('%', :search, '%'))" )
	List<Product> search(@Param("search") String search);
}