package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	User findByUsername (String username);

}
