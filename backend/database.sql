CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL, 
  roles VARCHAR(50)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
user (firstname, lastname, hashedPassword, roles)
VALUES
(
  'John',
  'Doe',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'admin'
),
(
  'Ariste',
  'Morin',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user'
),
(
  'Séverine',
  'Vincent',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user'
);

CREATE TABLE smartphone (
   id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   operating_system VARCHAR(50) NOT NULL,
   brand VARCHAR(50) NOT NULL,
   model VARCHAR(100) NOT NULL,
   version_os INT NOT NULL,
   ram VARCHAR(50) NOT NULL,
   storage_memory VARCHAR(50) NOT NULL,
   status_device VARCHAR(50) NOT NULL,
   start_up INT NOT NULL,
   network VARCHAR(10),
   accessorie TINYINT(1),
   category VARCHAR(50) NOT NULL,
   price VARCHAR(30) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
smartphone (operating_system, brand, model, version_os, ram, storage_memory, status_device, start_up, network, accessorie, category, price)
VALUES
(
  'android',
  'Samsung',
  'Galaxy A5',
  '8',
  '3 Go',
  '32 Go',
  'bloqué',
  '2019',
  '4G',
  '1',
  '2 - C',
  '96'
),
(
  'IOS',
  'Apple',
  'Iphone 8',
  '12',
  '4 Go',
  '64 Go',
  'bloqué',
  '2021',
  '4G',
  '1',
  '2 - C',
  '136'
),
(
  'android',
  'Samsung',
  'Galaxy A5',
  '8',
  '3 Go',
  '32 Go',
  'bloqué',
  '2019',
  '4G',
  '1',
  '2 - C',
  '96'
),
(
  'IOS',
  'Apple',
  'Iphone 8',
  '12',
  '4 Go',
  '64 Go',
  'bloqué',
  '2021',
  '4G',
  '1',
  '2 - C',
  '136'
),
(
  'android',
  'Samsung',
  'Galaxy A5',
  '8',
  '3 Go',
  '32 Go',
  'bloqué',
  '2019',
  '4G',
  '1',
  '2 - C',
  '96'
),
(
  'IOS',
  'Apple',
  'Iphone 8',
  '12',
  '4 Go',
  '64 Go',
  'bloqué',
  '2021',
  '4G',
  '1',
  '2 - C',
  '136'
),
(
  'android',
  'Samsung',
  'Galaxy A5',
  '8',
  '3 Go',
  '32 Go',
  'bloqué',
  '2019',
  '4G',
  '1',
  '2 - C',
  '96'
),
(
  'IOS',
  'Apple',
  'Iphone 8',
  '12',
  '4 Go',
  '64 Go',
  'bloqué',
  '2021',
  '4G',
  '1',
  '2 - C',
  '136'
);


