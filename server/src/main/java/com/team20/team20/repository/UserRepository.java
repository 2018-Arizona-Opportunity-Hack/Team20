package com.team20.team20.repository;

import com.team20.team20.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByPhone(String phoneNumber);
}
