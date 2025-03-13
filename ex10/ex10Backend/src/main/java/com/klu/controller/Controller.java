package com.klu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.User;
import com.klu.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin
public class Controller {

	@Autowired
	private UserService service;
	// http://localhost:8085/user

	@PostMapping("/user")
	public String addUser(@RequestBody User user) {
		return service.insertUser(user);
	}

	// http://localhost:8085/check
	@PostMapping("/check")
	public String retrieveUser(@RequestBody User user) {
		return service.checkUser(user);
	}

	@GetMapping("/get")
	public List getDetails() {
		return service.getDetails();
	}
	

}
