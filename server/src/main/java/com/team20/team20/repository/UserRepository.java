package com.team20.team20.repository;

import com.team20.team20.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByPhone(String phoneNumber);
}
