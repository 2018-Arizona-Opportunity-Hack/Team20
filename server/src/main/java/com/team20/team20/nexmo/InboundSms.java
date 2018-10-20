package com.team20.team20.nexmo;

import lombok.Data;

@Data
public class InboundSms {
    private String msisdn;
    private String to;
    private String messageId;
    private String text;
    private String type;
    private String keyword;
    // message-timestamp and all non-required fields left off
}
