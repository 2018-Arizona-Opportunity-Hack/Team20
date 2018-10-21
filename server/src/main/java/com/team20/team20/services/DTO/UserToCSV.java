package com.team20.team20.services.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserToCSV {

    private Long id;
    private String name;
    private String phone;
    private Long orgId;

}
