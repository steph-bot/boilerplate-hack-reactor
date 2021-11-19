-- Write a database schema! --
DROP DATABASE IF EXISTS nasa;

CREATE DATABASE nasa;

USE nasa;

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(500) NOT NULL,
  title VARCHAR(200),
  description VARCHAR(2000),
  date VARCHAR(20)
);