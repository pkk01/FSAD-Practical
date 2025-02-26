package com.klu.contoller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.klu.Model.User;

import jakarta.websocket.server.PathParam;

@Controller
public class AppController {

	@GetMapping("/demo1")
	@ResponseBody
	public int fun1() {
		return 10;
	}

	@GetMapping("/demo2")
	@ResponseBody
	public double fun2() {
		return 10.5;
	}

	@GetMapping("/demo3")
	public String fun3() {
		return "first.html";
	}

	@GetMapping("/demo4")
	@ResponseBody
	public String fun4() {
		String univ = "KLEF";
		return "I study at " + univ;
	}

	@GetMapping("/demo5/{id}")
	@ResponseBody
	public String fun5(@PathVariable("id") int id) {

		return "" + id;
	}

	@GetMapping("/demo6/{a}/{b}")
	@ResponseBody
	public String fun6(@PathVariable("a") int a, @PathVariable("b") int b) {
		return "" + (a + b);
	}

	@GetMapping("/demo7")
	@ResponseBody
	public String fun7(@PathParam("id") int id) {

		return "" + id;
	}

	@GetMapping("/demo8/{name}")
	@ResponseBody
	public String fun5(@PathVariable("name") String name) {

		return name;
	}

	List<User> list = new ArrayList<>();

	@PostMapping("/demo9")
	@ResponseBody
	public String fun9(@RequestBody User user) {
		list.add(user);
		return "User added successfully";
	}

	@GetMapping("/demo9")
	@ResponseBody
	public List<User> fun10() {
		return list;
	}

}
