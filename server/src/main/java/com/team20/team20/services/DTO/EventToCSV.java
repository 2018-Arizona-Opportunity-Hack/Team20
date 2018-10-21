package com.team20.team20.services.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class EventToCSV {

    private Long id;
    private int desiredAttendees;
    private String title;
    private String date;
    private Long orgId;


}
