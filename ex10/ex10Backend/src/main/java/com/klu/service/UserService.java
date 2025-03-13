package com.klu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.User;
import com.klu.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public String insertUser(User user) {
		repository.save(user);
		return "success";
	}

	public String checkUser(User user) {
		User userRetrived = repository.findByUsername(user.getUsername());
		if (userRetrived != null) {
			if (userRetrived.getPassword().equals(user.getPassword()))
				return userRetrived.getRole();
			else
				return "0";
		} else {
			return "0";
		}
	}

	public List getDetails() {
		return repository.findAll();
	}

}
