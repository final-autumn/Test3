CREATE DATABASE HostAndServe;
USE HostAndServe;
CREATE TABLE Servers (id int PRIMARY KEY AUTO_INCREMENT, Alias varchar(30), ip varchar(60), creationDate date, hostingId int);
CREATE TABLE Hosting (id int PRIMARY KEY AUTO_INCREMENT, name varchar(31));
INSERT INTO Hosting (name) VALUES ('Amazon');
INSERT INTO Hosting (name) VALUES ('Microsoft');
INSERT INTO Hosting (name) VALUES ('Redhat');