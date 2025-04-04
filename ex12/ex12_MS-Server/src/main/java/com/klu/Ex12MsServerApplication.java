package com.klu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class Ex12MsServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ex12MsServerApplication.class, args);
	}

}
