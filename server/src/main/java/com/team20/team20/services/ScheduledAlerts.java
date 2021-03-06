package com.team20.team20.services;

import com.team20.team20.domain.Communication;
import com.team20.team20.domain.Event;
import com.team20.team20.domain.EventUser;
import com.team20.team20.domain.User;
import com.team20.team20.nexmo.SmsSender;
import com.team20.team20.repository.CommunicationRepository;
import com.team20.team20.repository.EventRepository;
import com.team20.team20.repository.EventUserRepository;
import com.team20.team20.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Component
public class ScheduledAlerts {

    private final
    EventRepository eventRepository;

    private final
    EventUserRepository eventUserRepository;

    private final
    UserRepository userRepository;

    private final
    CommunicationRepository communicationRepository;

    private final
    EventService eventService;

    @Autowired
    public ScheduledAlerts(EventRepository eventRepository, EventUserRepository eventUserRepository, UserRepository userRepository, CommunicationRepository communicationRepository, EventService eventService) {
        this.eventRepository = eventRepository;
        this.eventUserRepository = eventUserRepository;
        this.userRepository = userRepository;
        this.communicationRepository = communicationRepository;
        this.eventService = eventService;
    }

    public void sendConfirmationText(int noOfDays) throws Exception{
        Calendar calendar = Calendar.getInstance();
        Date tempDate = new Date();
        calendar.setTime(tempDate);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.add(Calendar.DAY_OF_YEAR, noOfDays);
        Date beforeDate = calendar.getTime();
        calendar.add(Calendar.DAY_OF_YEAR, 1);
        Date afterDate = calendar.getTime();
        List<Event> eventList = eventRepository.findUpcomingEvents(beforeDate, afterDate);

        for(Event event: eventList) {
            List<EventUser> eventUsers = eventUserRepository.findByEventId(event.getId());
            SmsSender sender = new SmsSender();
            for(EventUser eventUser: eventUsers) {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ss");
                Date newDate=sdf.parse(event.getDate().toString());
                sdf = new SimpleDateFormat("MM/dd/yyyy");
                SimpleDateFormat sdfTime = new SimpleDateFormat("hh:mm");
                String date = sdf.format(newDate);
                String time = sdfTime.format(newDate);

                sender.send(eventUser.getUser().getPhone(),
                        "Hello, " +
                                eventUser.getUser().getName() +
                                "! Please confirm if you are still able to volunteer with " +
                                eventUser.getEvent().getOrganization().getName() + " on: " +
                                date + " at " + time +
                                ". Respond Y / N");

                Communication communication = new Communication(new Date().toString(), "SMS", null, eventUserRepository.findById(eventUser.getId()).orElse(null));
                communicationRepository.save(communication);
            }
        }
    }

    public void sendSOS() throws Exception {
        int noOfDays = 2;
        Calendar calendar = Calendar.getInstance();
        Date tempDate = new Date();
        calendar.setTime(tempDate);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.add(Calendar.DAY_OF_YEAR, noOfDays);
        Date beforeDate = calendar.getTime();
        calendar.add(Calendar.DAY_OF_YEAR, 1);
        Date afterDate = calendar.getTime();

        List<Event> eventList = eventRepository.findUpcomingEvents(beforeDate, afterDate);
        for(Event event: eventList) {
            List<User> usersGoing = eventService.getUsersWhoSayTheyreGoing(event);
            if(usersGoing.size() < event.getDesiredAttendees()) {
                Iterable<User> users = userRepository.findAll();



                SmsSender sender = new SmsSender();
                for (User user : users) {
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ss");
                    Date newDate = sdf.parse(event.getDate().toString());
                    sdf = new SimpleDateFormat("MM/dd/yyyy");
                    SimpleDateFormat sdfTime = new SimpleDateFormat("hh:mm");
                    String date = sdf.format(newDate);
                    String time = sdfTime.format(newDate);

                    sender.send(user.getPhone(),
                            "Hello! A volunteer event on " + date +
                                    " at " + event.getOrganization().getName() +
                                    " is still in need of additional volunteers! If you haven't already signed up, please consider helping by visiting: https://op-hack-2018-team20.herokuapp.com/#/orgs/1/events");
                }
            }
        }
    }

    @Scheduled(cron = "0 0 9 * * *")
    public void SevenDayConfirmation() throws Exception {
        sendConfirmationText(7);
    }


    @Scheduled(cron = "0 0 9 * * *")
    public void ThreeDayConfirmation() throws Exception {
        sendConfirmationText(3);
    }

    @Scheduled(cron = "0 0 9 * * *")
    public void TwoDaySOS() throws Exception {
        sendSOS();
    }

}
