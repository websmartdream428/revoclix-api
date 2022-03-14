USE revoclix_db; 

CREATE TABLE IF NOT EXISTS browser
(
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(64)
)