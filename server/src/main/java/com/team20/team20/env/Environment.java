package com.team20.team20.env;

import io.github.cdimascio.dotenv.Dotenv;

public class Environment {

    public String get(String key) {
        Dotenv dotenv = null;
        try {
            dotenv = Dotenv.load();
        } catch (Exception e) {}

        if (null != dotenv) {
            return dotenv.get(key);
        } else {
            return System.getenv(key);
        }
    }
}
