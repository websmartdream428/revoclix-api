USE revoclix_db; 

CREATE TABLE IF NOT EXISTS users_conections
(
    id INT PRIMARY KEY auto_increment,
    id_users INT(10),
    id_browser INT(10),
    date_add DATETIME,
    http_referer VARCHAR(256)
)