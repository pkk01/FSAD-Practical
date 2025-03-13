package com.klu.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "user_auth")
public class User {
	@Id
	String username;
	String password;
	String role;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {  // Standard naming
        this.password = password;
    }
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
    public String toString() {
        return "User [username=" + username + ", password=" + password + ", role=" + role + "]";
    }
	
	

}
