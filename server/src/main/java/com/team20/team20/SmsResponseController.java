package com.team20.team20;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SmsResponseController {
    @GetMapping("/hello")
    @ResponseBody
    public String hello() {
        System.out.println("got a hit");
        return "hello, world";
    }
}
