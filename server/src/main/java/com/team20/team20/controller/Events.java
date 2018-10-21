package com.team20.team20.controller;

import com.team20.team20.domain.Event;
import com.team20.team20.repository.EventRepository;
import com.team20.team20.services.DTO.AdminEvent;
import com.team20.team20.services.DTO.VolunteerEvent;
import com.team20.team20.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Events {

    private final EventService eventService;

    @Autowired
    public Events(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/orgs/{orgId}/events")
    public List<VolunteerEvent> getEvents(@PathVariable Long orgId) {
        return eventService.getVolunteerEvents(orgId);
    }

    @GetMapping("/event/{eventId}")
    public AdminEvent getEvent(@PathVariable Long eventId) {
        Event event = eventService.eventRepository.findById(eventId).orElse(null);
        if(event == null) return null;


    }
}
