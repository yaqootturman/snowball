BEGIN;

DROP TABLE IF EXISTS "user", pledge, pledge_to_user,category, pledge_pros_cons, pledge_instructions, pledge_resources, pledge_references
    CASCADE;

CREATE TABLE "user"
(
    user_id serial primary key ,
    first_name VARCHAR(100) ,
    last_name VARCHAR(100) ,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(100) NOT NULL

);

CREATE TABLE category
(
    category_id serial primary key ,
    name TEXT ,
    img TEXT ,
    description TEXT NOT NULL,
    number_of_pledges  INTEGER 
);
CREATE TABLE pledge
(
    pledge_id serial primary key ,
    category_id INTEGER,
    order_id INTEGER UNIQUE,
    pledge_short_description VARCHAR(200),
    title VARCHAR(200) ,
    FOREIGN KEY (category_id) REFERENCES category(category_id),
    description TEXT NOT NULL,
    number_of_enrollement INTEGER ,
    img TEXT ,
    banner_img TEXT ,
    importance TEXT ,
    further_info TEXT
);
CREATE TABLE pledge_to_user
(   pledge_id INTEGER,
    FOREIGN KEY (pledge_id) REFERENCES pledge (pledge_id),  
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user" (user_id),
    pledge_name TEXT
);
 

CREATE TABLE pledge_pros_cons
(
    id serial primary key ,
    pledge_id INTEGER,
    FOREIGN KEY (pledge_id) REFERENCES pledge (pledge_id),  
    statement TEXT ,
    color TEXT 
);
CREATE TABLE pledge_instructions(
    instructions_id serial primary key ,
     pledge_id INTEGER,
    FOREIGN KEY (pledge_id) REFERENCES pledge (pledge_id),  
    description TEXT
);

CREATE TABLE pledge_resources
(
    resources_id serial primary key ,
    pledge_id INTEGER,
    FOREIGN KEY (pledge_id) REFERENCES pledge (pledge_id),  
    description TEXT,
    link TEXT
);

CREATE TABLE pledge_references
(
    references_id serial primary key ,
     pledge_id INTEGER,
    FOREIGN KEY (pledge_id) REFERENCES pledge (pledge_id),  
    description TEXT,
    link TEXT
);
COMMIT;