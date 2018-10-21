package com.team20.team20.controller;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.team20.team20.domain.Event;
import com.team20.team20.domain.User;
import com.team20.team20.services.DTO.AdminEvent;
import com.team20.team20.services.DTO.UserStats;
import com.team20.team20.services.DTO.VolunteerEvent;
import com.team20.team20.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

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
        AdminEvent adminEvent = new AdminEvent();
        adminEvent.setEvent(event);
        adminEvent.setNumberGoing(eventService.NumberGoing(event));
        List<User> users = eventService.getUsersWhoSayTheyreGoing(event);
        List<UserStats> userStats = users.stream().map(user -> {
           Float probability = eventService.getUserProbablity(user.getId());
           return new UserStats(user, probability);
        }).collect(Collectors.toList());
        adminEvent.setUsers(userStats);
        return adminEvent;
    }

    @GetMapping(path="/event/csv", produces="text/csv")
    public String getMyCAsCsv() throws Exception {
        CsvMapper mapper = new CsvMapper();
        AdminEvent event = new AdminEvent();
        CsvSchema schema = mapper.schemaFor(AdminEvent.class);
        String csv = mapper.writer(schema).writeValueAsString(event);
        return csv;
    }
}
