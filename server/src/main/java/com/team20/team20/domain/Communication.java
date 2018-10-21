package com.team20.team20.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
public class Communication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String date;
    private String method;

    private Boolean response;
    @ManyToOne
    @JoinColumn(name = "event_user_id")
    private EventUser eventUser;

    public Communication(String date, String method, Boolean response, EventUser eventUser) {
        this.date = date;
        this.method = method;
        this.response = response;
        this.eventUser = eventUser;
    }
}
