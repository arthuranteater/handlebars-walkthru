-- seeds for kids table

INSERT INTO kids ( kid_name, alias, age, yob, img) VALUES ('Jshaun', "JSON", 18, 2001);
INSERT INTO kids ( kid_name, alias, age, yob, img) VALUES ('Mongo', "MongoDB", 13, 2007);
INSERT INTO kids ( kid_name, alias, age, yob, img) VALUES ('Jah', "Javascript", 24, 1995);
INSERT INTO kids ( kid_name, alias, age, yob, img) VALUES ('Piter', "Python", 29, 1990);

-- seeds for parents table

INSERT INTO parents (parent_name, kid_id) VALUES ('Brendan Eich', 3);
INSERT INTO parents (parent_name, kid_id) VALUES ('Netscape Navigator', 3);
INSERT INTO parents (parent_name, kid_id) VALUES ('Guido van Rossum', 4);
INSERT INTO parents (parent_name, kid_id) VALUES ('Centrum Wiskunde & Informatica', 4);
INSERT INTO parents (parent_name, kid_id) VALUES ('Douglas Crockford', 1);
INSERT INTO parents (parent_name, kid_id) VALUES ('State Software', 1);
INSERT INTO parents (parent_name, kid_id) VALUES ('Dwight Merriman', 2);
INSERT INTO parents (parent_name, kid_id) VALUES ('Eliot Horowitz', 2);
INSERT INTO parents (parent_name, kid_id) VALUES ('Kevin Ryan', 2);
INSERT INTO parents (parent_name, kid_id) VALUES ('DoubleClick', 2);

-- seeds for hobbies table 

INSERT INTO hobbies (hobby, kid_id) VALUES ('databasing', 2);
INSERT INTO hobbies (hobby, kid_id) VALUES ('singing songs', 2);
INSERT INTO hobbies (hobby, kid_id) VALUES ('executing functions', 3);
INSERT INTO hobbies (hobby, kid_id) VALUES ('singing songs', 3);
INSERT INTO hobbies (hobby, kid_id) VALUES ('building dictionaires', 4);
INSERT INTO hobbies (hobby, kid_id) VALUES ('singing songs', 4);
INSERT INTO hobbies (hobby, kid_id) VALUES ('translating js', 1);
INSERT INTO hobbies (hobby, kid_id) VALUES ('singing songs', 1);