package com.team20.team20.repository;

import com.team20.team20.domain.Event;
import com.team20.team20.domain.EventUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EventUserRepository extends CrudRepository<EventUser, Long> {
    List<EventUser> findByEventId(Long eventId);
    List<EventUser> findByUserId(Long userId);
    EventUser findEventUserByUserIdAndEventId(Long userId, Long eventId);
}
