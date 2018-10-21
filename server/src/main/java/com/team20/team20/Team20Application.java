package com.team20.team20;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@EnableScheduling
public class Team20Application {

	public static void main(String[] args) {
		SpringApplication.run(Team20Application.class, args);
	}

}
