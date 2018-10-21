package com.team20.team20.repository;

import com.team20.team20.domain.Event;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface EventRepository extends CrudRepository<Event, Long> {
    List<Event> findByOrganizationId(Long orgId);

    @Query(value = "SELECT * FROM event WHERE date > NOW() AND organization_id = ?1", nativeQuery = true)
    List<Event> findByOrganizationFilterByDate(Long orgId);

    @Query(value = "SELECT * FROM event WHERE date between ?1 and ?2", nativeQuery = true)
    List<Event> findUpcomingEvents(Date date1, Date date2);

}
