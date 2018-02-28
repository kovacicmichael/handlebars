CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Sky Diving');
INSERT INTO wishes (wish) VALUES ('Scubba Diving');
INSERT INTO wishes (wish) VALUES ('Learn to Pilot an aircraft');