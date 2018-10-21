package com.team20.team20.domain;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Communication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "event_user_id")
    private EventUser eventUser;

    private String method;
    private String date;

    private Boolean response;

}
