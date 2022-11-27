# testcontainers-workshop-ui

<p align="middle">
    <img src="logo.svg" height="180"/>
    <img src="testcontainers-logo.svg" height="180"/>
</p>    

## UI for the "Holiday Planning Tool"

During this workshop we will work with the fictional Holiday Planning Tool.
This is a web application that can be used to schedule your time off work with your colleagues.

Because we all deserve some time off, don't we?

<img src="holiday.jpg" width="500" />

## Available Docker images:

First start the backend app of the Vakantieplanner.

Then run this with the following docker command:

```shell
docker run -p 8081:8080 suffix/testcontainers-workshop-ui:1.0.1
```

This starts a NGNIX HTTP server that serves the UI.

Go to `http://localhost:8081/` in your favourite browser and don't forget to enjoy your holiday.
