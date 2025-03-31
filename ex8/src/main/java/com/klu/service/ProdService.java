package com.klu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Product;
import com.klu.repository.ProductRepository;

@Service
public class ProdService {

	@Autowired
	ProductRepository productRepository;

	public String insertData(Product product) {
		productRepository.save(product);
		return "Product saved successfully";
	}

	public String updateData(Product product) {

		if (productRepository.findById(product.getId()) != null)
			productRepository.delete(product);
		productRepository.save(product);
		return "product updated successfully";
	}

	public String deleteData (int id) {
		productRepository.delete(productRepository.findById(id).get());
		return "deleted Successfully";
	}

	public List<Product> retrieveData() {
		return productRepository.findAll();
	}
}
