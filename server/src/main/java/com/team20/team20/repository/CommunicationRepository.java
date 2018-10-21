package com.team20.team20.repository;

import com.team20.team20.domain.Communication;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommunicationRepository extends CrudRepository<Communication, Long> {
    List<Communication> findByEventUser_IdOrderByIdDesc(Long userId);
}
