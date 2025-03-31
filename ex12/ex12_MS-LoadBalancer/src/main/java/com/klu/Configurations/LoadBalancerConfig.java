package com.klu.Configurations;

import org.springframework.cloud.client.DefaultServiceInstance;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.cloud.loadbalancer.support.ServiceInstanceListSuppliers;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadBalancerConfig {
    @Bean
    public ServiceInstanceListSupplier serviceInstanceListSupplier(ConfigurableApplicationContext context) {
        ServiceInstanceListSupplier serviceInstanceListSupplier = ServiceInstanceListSuppliers.from("x",
                new DefaultServiceInstance("EX12-MS-Client-1", "x", "localhost", 8081, false),
                new DefaultServiceInstance("S14-MS-Client-2", "x", "localhost", 8082, false));

        return ServiceInstanceListSupplier.builder()
                .withBase(serviceInstanceListSupplier)
                .build(context);
    }
}