package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.User;

public interface ProductRepository extends JpaRepository<User, Integer> {

}
