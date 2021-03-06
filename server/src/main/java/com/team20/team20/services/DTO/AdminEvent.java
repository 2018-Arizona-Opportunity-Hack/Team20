package com.team20.team20.services.DTO;

import com.team20.team20.domain.Event;
import lombok.Data;

import java.util.List;

@Data
public class AdminEvent {
    private Event event;
    private Float numberGoing;
    private List<UserStats> users;
}
