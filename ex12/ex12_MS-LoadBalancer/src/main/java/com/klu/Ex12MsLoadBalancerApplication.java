package com.klu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class Ex12MsLoadBalancerApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ex12MsLoadBalancerApplication.class, args);
	}

}
