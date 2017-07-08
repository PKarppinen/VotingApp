Simple voting application. Questions and votes are stored in PostgreSQL database.
Database is accessed by SpringBoot REST API. GUI is built on React framework.
GUI uses API to get and store data. GUI and API both run on Tomcat.

Run "mvnw spring-boot:run" to run GUI and API. Remember to have PostgreSQL running
locally on port 5432. DB uses username and password "votingappdbuser".
QUI can be found from "http://localhost:8090/" and API from "http://localhost:8090/".
