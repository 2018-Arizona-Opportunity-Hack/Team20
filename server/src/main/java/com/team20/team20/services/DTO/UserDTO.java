package com.team20.team20.services.DTO;


import com.team20.team20.domain.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDTO {

    private User user;
    private Long eventId;
    private Long organizationId;

}
