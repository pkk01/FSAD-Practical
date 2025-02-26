package com.klu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.Product;
import com.klu.service.ProdService;

@RestController
@CrossOrigin
public class Controller {

	@Autowired
	ProdService service;
	// http://localhost:8081/product

	// ---- Create ----
	@PostMapping("/product")
	public String addItem(@RequestBody Product product) {
		return service.insertData(product);
	}

	// ---- Update ----
	@PutMapping("/product")
	public String updateItem(@RequestBody Product product) {
		return service.updateData(product);
	}
	
	// ---- Delete ----
	@DeleteMapping("/product/{id}")
	public String deleteItem(@PathVariable("id") int id) {
		return service.deleteData(id);
	} 
	
	// --- Read ----
	@GetMapping("/product")
	public List<Product> retrieveProduct() {
		return service.retrieveData();
	}
}
