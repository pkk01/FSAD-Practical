package com.klu.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klu.service.JWTManager;

@RestController
public class AppController {

    @Autowired
    private JWTManager jwtManager;

    @GetMapping("/login")
    public String fun1(@RequestParam("username") String username) {
        return jwtManager.generateToken(username);
    }

    @GetMapping("/validate")
    public Map<String, String> fun2(@RequestParam("token") String token) {
        return jwtManager.validateToken(token);
    }

}
