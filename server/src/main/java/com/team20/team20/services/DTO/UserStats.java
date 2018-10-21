package com.team20.team20.services.DTO;

import com.team20.team20.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserStats {
    private User user;
    private Float probability;
}
