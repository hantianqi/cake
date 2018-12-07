CREATE DATABASE xm CHARSET=UTF8;
USE xm;
CREATE TABLE xm_img(
   id INT PRIMARY KEY AUTO_INCREMENT,
   imgUrl VARCHAR(255)
);
INSERT INTO xm_img VALUES(null,"http://127.0.0.1:3000/img/index/index1.png");
INSERT INTO xm_img VALUES(null,"http://127.0.0.1:3000/img/index/index2.png");
INSERT INTO xm_img VALUES(null,"http://127.0.0.1:3000/img/index/index3.png");
INSERT INTO xm_img VALUES(null,"http://127.0.0.1:3000/img/index/index4.png");
INSERT INTO xm_img VALUES(null,"http://127.0.0.1:3000/img/index/index5.png");