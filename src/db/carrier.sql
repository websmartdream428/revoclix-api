USE revoclix_db; 

CREATE TABLE IF NOT EXISTS carrier
(
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(64),
    url VARCHAR(255),
    active BOOLEAN DEFAULT FALSE,
)