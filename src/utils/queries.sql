CREATE TABLE cheesecake_ranking (
id  SMALLSERIAL,
restaurant varchar(200) not null,
position varchar(32) not null,
price varchar(32)
);

DELETE FROM cheesecake_ranking WHERE id = 1

INSERT INTO cheesecake_ranking (id, restaurant, position) VALUES (default, 'bertys', 1);