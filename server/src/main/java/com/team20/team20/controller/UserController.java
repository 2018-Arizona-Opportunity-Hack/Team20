package com.team20.team20.controller;

import com.team20.team20.domain.EventUser;
import com.team20.team20.domain.User;
import com.team20.team20.repository.EventRepository;
import com.team20.team20.repository.EventUserRepository;
import com.team20.team20.repository.OrganizationRepository;
import com.team20.team20.repository.UserRepository;
import com.team20.team20.services.DTO.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final
    UserRepository userRepository;

    private final EventUserRepository eventUserRepository;

    private EventRepository eventRepository;
    private OrganizationRepository organizationRepository;

    @Autowired
    public UserController(
            UserRepository userRepository,
            EventUserRepository eventUserRepository,
            EventRepository eventRepository,
            OrganizationRepository organizationRepository
    ) {
        this.userRepository = userRepository;
        this.eventUserRepository = eventUserRepository;
        this.eventRepository = eventRepository;
        this.organizationRepository = organizationRepository;
    }

    @PostMapping("/register")
    public Long eventRegistration(@RequestBody UserDTO user) {
        User userStuff;
        String cleanPhone = user.getUser().getPhone().replaceAll("[^0-9]","");
        if(cleanPhone.length() == 10)
            cleanPhone = "1" + cleanPhone;
        user.getUser().setPhone(cleanPhone);
        userStuff = userRepository.findUserByPhone(user.getUser().getPhone());
        if(userStuff == null) {
            userStuff = user.getUser();
            userStuff.setOrganization(organizationRepository.findById(user.getOrganizationId()).orElse(null));
            userStuff = userRepository.save(user.getUser());
        }
        EventUser eventUser = eventUserRepository.findEventUserByUserIdAndEventId(userStuff.getId(), user.getEventId());
        if(eventUser == null) {
            eventUserRepository.save(new EventUser(null, userStuff, eventRepository.findById(user.getEventId()).orElse(null), null));
        }
        return user.getUser().getId();
    }

}
