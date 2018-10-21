package com.team20.team20.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int desiredAttendees;
    private String title;

    @Basic
    private LocalDateTime date;


    @ManyToOne
    @JoinColumn(name = "organization_id")
    private Organization organization;


}
