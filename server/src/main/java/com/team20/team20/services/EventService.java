package com.team20.team20.services;

import com.team20.team20.domain.Communication;
import com.team20.team20.domain.Event;
import com.team20.team20.domain.EventUser;
import com.team20.team20.domain.User;
import com.team20.team20.repository.CommunicationRepository;
import com.team20.team20.repository.EventRepository;
import com.team20.team20.repository.EventUserRepository;
import com.team20.team20.repository.UserRepository;
import com.team20.team20.services.DTO.VolunteerEvent;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService {

    public EventRepository eventRepository;
    public EventUserRepository eventUserRepository;
    public CommunicationRepository communicationRepository;
    public UserRepository userRepository;

    public EventService(
            EventRepository eventRepository,
            EventUserRepository eventUserRepository,
            CommunicationRepository communicationRepository,
            UserRepository userRepository
    ) {
        this.eventRepository = eventRepository;
        this.eventUserRepository = eventUserRepository;
        this.communicationRepository = communicationRepository;
        this.userRepository = userRepository;
    }

    public List<User> getUsersWhoSayTheyreGoing(Event event) {
        List<EventUser> eventUsers = eventUserRepository.findByEventId(event.getId());
        List<User> users = new ArrayList<>();
        for(EventUser eventUser: eventUsers) {
            List<Communication> communications = communicationRepository.findByEventUser_IdOrderByIdDesc(eventUser.getUser().getId());
            boolean theyAreGoing = true;
            for(Communication communication: communications) {
                if(communication.getResponse() != null) {
                    if(!communication.getResponse()) {
                        theyAreGoing = false;
                    }
                }
            }

            if(theyAreGoing){
                User user = userRepository.findById(eventUser.getUser().getId()).orElse(null);
                users.add(user);
            }
        }
        return users;
    }

    public Float getUserProbablity(Long userId) {
        List<EventUser> userHistory = eventUserRepository.findByUserId(userId).stream().filter(
                historicalEvent -> historicalEvent.getAttend() != null).collect(Collectors.toList()); // get only historical events
        Integer eventsTheyWereHonestAbout = userHistory.size();
        Float weighted;
        for(EventUser historicalEvent: userHistory) {
            boolean theySaidTheyAreNotGoing = false;
            List<Communication> communications = communicationRepository.findByEventUser_IdOrderByIdDesc(historicalEvent.getId());
            for(Communication communication: communications) {
                if(!communication.getResponse()) {
                    theySaidTheyAreNotGoing = true;
                }
            }

            if(!theySaidTheyAreNotGoing && !historicalEvent.getAttend()){
                eventsTheyWereHonestAbout -= 1;
            }
        }

        if(userHistory.size() == 0) {
            weighted = 1f;
        } else {
            weighted = eventsTheyWereHonestAbout.floatValue() / userHistory.size();
        }
        return weighted;
    }

    public Float NumberGoing(Event event) {
        Float numberGoing = 0f;
        List<EventUser> eventUsers = eventUserRepository.findByEventId(event.getId());
        for(EventUser eventUser: eventUsers) {

            Float weighted = getUserProbablity(eventUser.getUser().getId());

            List<Communication> communications = communicationRepository.findByEventUser_IdOrderByIdDesc(eventUser.getId());
            for(Communication communication: communications) {
                if(communication.getResponse() != null && !communication.getResponse()) {
                    // if the user said they are NOT going, set user probability to zero
                    weighted = 0f;
                }
            }

            numberGoing += weighted;
        }
        return numberGoing;
    }


    public List<VolunteerEvent> getVolunteerEvents(Long orgId) {
        List<Event> events = eventRepository.findByOrganizationFilterByDate(orgId);
        List<VolunteerEvent> volunteerEvents = new ArrayList<>();
        for(Event event : events) {
            Float numberGoing = NumberGoing(event);
            VolunteerEvent volunteerEvent = new VolunteerEvent(event, numberGoing);
            volunteerEvents.add(volunteerEvent);
        }
        return volunteerEvents;
    }



}
