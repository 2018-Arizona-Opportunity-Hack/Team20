package com.team20.team20.services.DTO;
import com.team20.team20.domain.Event;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class VolunteerEvent {

    private Long id;
    private int desiredAttendees;
    private String title;
    private LocalDateTime date;
    private Float remaining;

    public VolunteerEvent(Event event, Float numGoing) {
        this.id = event.getId();
        this.desiredAttendees = event.getDesiredAttendees();
        this.date = event.getDate();
        this.title = event.getTitle();
        this.remaining = event.getDesiredAttendees() -  numGoing;
    }
}
