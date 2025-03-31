package com.klu.Components;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.klu.Configurations.LoadBalancerConfig;

@Component
@LoadBalancerClient(value  = "x", configuration = LoadBalancerConfig.class)
public class Calculator {

    @Autowired
    RestTemplate restTemplate;

    public String add(int a, int b) {
        return restTemplate.getForObject("http://x/add/" + a + "/" + b, String.class);
    }

}
