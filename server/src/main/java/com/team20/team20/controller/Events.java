package com.team20.team20.controller;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.team20.team20.domain.Event;
import com.team20.team20.domain.User;
import com.team20.team20.repository.EventRepository;
import com.team20.team20.repository.UserRepository;
import com.team20.team20.services.DTO.*;
import com.team20.team20.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class Events {

    private final EventService eventService;

    private final
    UserRepository userRepository;

    private final
    EventRepository eventRepository;

    @Autowired
    public Events(EventService eventService, UserRepository userRepository, EventRepository eventRepository) {
        this.eventService = eventService;
        this.userRepository = userRepository;
        this.eventRepository = eventRepository;
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

    @GetMapping(path="/user/csv", produces="text/csv")
    public String getUserCsv() throws Exception {
        CsvMapper mapper = new CsvMapper();

        Iterable<User> users = userRepository.findAll();
        List<UserToCSV> userCsvList = new ArrayList<>();
        for (User user : users) {
            UserToCSV userToCSV = new UserToCSV(user.getId(), user.getName(), user.getPhone(), user.getOrganization().getId());
            userCsvList.add(userToCSV);
        }

        CsvSchema schema = mapper.schemaFor(UserToCSV.class).withHeader();
        String csv = mapper.writer(schema).writeValueAsString(userCsvList);
        return csv;
    }

    @GetMapping(path="/event/csv", produces="text/csv")
    public String getEventCsv() throws Exception {
        CsvMapper mapper = new CsvMapper();

        Iterable<Event> events = eventRepository.findAll();
        List<EventToCSV> eventCsvList = new ArrayList<>();
        for (Event event : events) {
            EventToCSV eventToCSV = new EventToCSV(event.getId(), event.getDesiredAttendees(), event.getTitle(), event.getDate().toString(), event.getOrganization().getId());
            eventCsvList.add(eventToCSV);
        }

        CsvSchema schema = mapper.schemaFor(EventToCSV.class).withHeader();
        String csv = mapper.writer(schema).writeValueAsString(eventCsvList);
        return csv;
    }
}
