package com.team20.team20;

import com.team20.team20.domain.Communication;
import com.team20.team20.domain.EventUser;
import com.team20.team20.domain.User;
import com.team20.team20.nexmo.InboundSms;
import com.team20.team20.nexmo.SmsSender;
import com.team20.team20.repository.CommunicationRepository;
import com.team20.team20.repository.EventUserRepository;
import com.team20.team20.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class SmsResponseController {

    private final
    CommunicationRepository communicationRepository;

    private final
    UserRepository userRepository;

    final
    EventUserRepository eventUserRepository;

    @Autowired
    public SmsResponseController(CommunicationRepository communicationRepository, UserRepository userRepository, EventUserRepository eventUserRepository) {
        this.communicationRepository = communicationRepository;
        this.userRepository = userRepository;
        this.eventUserRepository = eventUserRepository;
    }

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

        User user = userRepository.findUserByPhone(inboundSms.getMsisdn());
        List<EventUser> eventUsers = eventUserRepository.findByUserId(user.getId());
        List<Communication> communications = eventUsers.stream().flatMap(eventUser -> {
            return communicationRepository.findByEventUser_IdOrderByIdDesc(eventUser.getUser().getId()).stream();
        })
        .sorted((ele1, ele2) -> {
            return Math.toIntExact(ele1.getId() - ele2.getId());
        }).collect(Collectors.toList());

        for (Communication communication : communications) {
            if(communication.getEventUser().getUser().getPhone() == inboundSms.getMsisdn()) {
                if(inboundSms.getText().equals("Y")) {
                    communication.setResponse(true);
                } else if (inboundSms.getText().equals("N")) {
                    communication.setResponse(false);
                }
                communicationRepository.save(communication);
                break;
            }
        }
        return "hello, world";
    }

    @GetMapping("/api/sms/receipt")
    @ResponseBody
    public String receipt() {
        System.out.println("got a receipt");
        return "hello, world";
    }

}
