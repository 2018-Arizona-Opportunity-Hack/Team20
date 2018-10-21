package com.team20.team20.nexmo;

import com.nexmo.client.NexmoClient;
import com.nexmo.client.auth.AuthMethod;
import com.nexmo.client.auth.TokenAuthMethod;
import com.nexmo.client.sms.SmsSubmissionResult;
import com.nexmo.client.sms.messages.TextMessage;
import com.team20.team20.env.Environment;

public class SmsSender {

    private String NEXMO_PHONE_NUMBER;
    private String API_KEY;
    private String API_SECRET;

    public SmsSender() {
        Environment env = new Environment();

        NEXMO_PHONE_NUMBER = env.get("NEXMO_PHONE_NUMBER");

        API_KEY = env.get("NEXMO_API_KEY");
        API_SECRET = env.get("NEXMO_API_SECRET");
    }

    public void send(String phoneNumber, String message) throws Exception {

        AuthMethod auth = new TokenAuthMethod(API_KEY, API_SECRET);
        NexmoClient client = new NexmoClient(auth);
        System.out.println(NEXMO_PHONE_NUMBER);

        SmsSubmissionResult[] responses = client.getSmsClient().submitMessage(new TextMessage(
                NEXMO_PHONE_NUMBER,
                phoneNumber,
                message));
    }
}
