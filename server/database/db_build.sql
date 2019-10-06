BEGIN;

  DROP TABLE IF EXISTS user, pledge, pledge_to_user, category
    CASCADE;

CREATE TABLE user
(
    user_id serial primary key ,
    first_name VARCHAR(100) ,
    last_name VARCHAR(100) ,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(100) NOT NULL

);

CREATE TABLE pledge
(
    pledge_id serial primary key ,
    title VARCHAR(200) ,
    description TEXT NOT NULL,
    number_of_enrollement  INTEGER ,
    img TEXT
);

CREATE TABLE pledge_to_user
(
    FOREIGN KEY (pledge_id) REFERENCES pledge (pledge_id),  
    FOREIGN KEY (user_id) REFERENCES user (user_id),    bledge_name TEXT
);
 

CREATE TABLE category
(
    category_id serial primary key ,
    name VARCHAR(100) ,
    img TEXT ,
    description TEXT NOT NULL,
    number_of_pledges  INTEGER ,
);
















Category

category_id
name
img
description
number_of_pledges































COMMIT;