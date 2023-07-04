CREATE TABLE world.students (id Int PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, age int NOT NULL, city TEXT NOT NULL); 

INSERT INTO world.students VALUES(1, "Иван", "Иванов", 32 , "Саратов");
INSERT INTO world.students VALUES(2, "Сидр", "Сидоров", 31 , "Москва");
INSERT INTO world.students VALUES(3, "Алексей", "Алексеев", 22 , "Киров");
INSERT INTO world.students VALUES(4, "Борис", "Борисов", 11 , "Иваново");

SELECT * FROM world.students