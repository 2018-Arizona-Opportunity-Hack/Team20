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

    @GetMapping("/api/sms/inbound")
    @ResponseBody
    public String inbound() {
        System.out.println("got an inbound");
        return "hello, world";
    }

    @GetMapping("/api/sms/receipt")
    @ResponseBody
    public String receipt() {
        System.out.println("got a receipt");
        return "hello, world";
    }

}
