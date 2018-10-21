package com.team20.team20.controller;

import com.team20.team20.domain.EventUser;
import com.team20.team20.domain.User;
import com.team20.team20.repository.EventRepository;
import com.team20.team20.repository.EventUserRepository;
import com.team20.team20.repository.OrganizationRepository;
import com.team20.team20.repository.UserRepository;
import com.team20.team20.services.DTO.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Long createUser(@RequestBody UserDTO user) {
        User userStuff;
        userStuff = userRepository.findUserByPhone(user.getUser().getPhone());
        if(userStuff == null) {
            userStuff = user.getUser();
            userStuff.setOrganization(organizationRepository.findById(user.getOrganizationId()).orElse(null));
            userStuff = userRepository.save(user.getUser());
        }
        eventUserRepository.save(new EventUser(null, userStuff, eventRepository.findById(user.getEventId()).orElse(null), null));
        return user.getUser().getId();
    }

}
