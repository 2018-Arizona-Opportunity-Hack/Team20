# Setup

1. Copy `resources/.env-example` file to `resources/.env` and update variables
2. Create application-local.properties

```
spring.datasource.driverClassName=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://machine:port/name
spring.datasource.username=user
spring.datasource.password=pw
```

# Heroku setup

1. Create all environment variables from `resources/.env-example`
