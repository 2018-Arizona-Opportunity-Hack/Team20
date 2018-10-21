package com.team20.team20;

import com.team20.team20.nexmo.InboundSms;
import com.team20.team20.nexmo.SmsSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class SmsResponseController {

    @GetMapping("/hello/{phoneNumber}")
    @ResponseBody
    public String hello(@PathVariable String phoneNumber) throws Exception {
        SmsSender smsSender = new SmsSender();

        smsSender.send(phoneNumber, "Hello, world!");

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
