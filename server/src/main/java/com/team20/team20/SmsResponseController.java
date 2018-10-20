package com.team20.team20;

import com.team20.team20.nexmo.InboundSms;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SmsResponseController {

    @GetMapping("/hello")
    @ResponseBody
    public String hello() {
        System.out.println("got a hit");
        return "hello, world";
    }

    @PostMapping("/api/sms/inbound")
    @ResponseBody
    public String inbound(@RequestBody InboundSms inboundSms) {
        System.out.println(inboundSms);
        return "hello, world";
    }

    @GetMapping("/api/sms/receipt")
    @ResponseBody
    public String receipt() {
        System.out.println("got a receipt");
        return "hello, world";
    }

}
