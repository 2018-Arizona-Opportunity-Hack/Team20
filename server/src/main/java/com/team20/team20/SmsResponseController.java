package com.team20.team20;

import com.nexmo.client.NexmoClient;
import com.nexmo.client.auth.AuthMethod;
import com.nexmo.client.auth.TokenAuthMethod;
import com.nexmo.client.sms.SmsSubmissionResult;
import com.nexmo.client.sms.messages.TextMessage;
import com.team20.team20.nexmo.InboundSms;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class SmsResponseController {

    @GetMapping("/hello/{phoneNumber}")
    @ResponseBody
    public String hello(@PathVariable String phoneNumber) throws Exception {
        System.out.println("got a hit");

        Dotenv dotenv = Dotenv.load();
        String NEXMO_PHONE_NUMBER = dotenv.get("NEXMO_PHONE_NUMBER");

        String API_KEY = dotenv.get("NEXMO_API_KEY");
        String API_SECRET = dotenv.get("NEXMO_API_SECRET");

        AuthMethod auth = new TokenAuthMethod(API_KEY, API_SECRET);
        NexmoClient client = new NexmoClient(auth);
        System.out.println(NEXMO_PHONE_NUMBER);

        SmsSubmissionResult[] responses = client.getSmsClient().submitMessage(new TextMessage(
                NEXMO_PHONE_NUMBER,
                phoneNumber,
                "Hello from api thing!"));
        for (SmsSubmissionResult response : responses) {
            System.out.println(response);
        }

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
