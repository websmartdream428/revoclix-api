USE revoclix_db; 

CREATE TABLE IF NOT EXISTS address
(
    id INT PRIMARY KEY auto_increment,
    id_country INT(10),
    id_user INT(10),
    alias VARCHAR(32),
    company VARCHAR(32),
    lastname VARCHAR(32),
    firstname VARCHAR(32),
    address1 VARCHAR(128),
    address2 VARCHAR(128),
    postcode VARCHAR(12),
    city VARCHAR(64),
    other TEXT,
    phone VARCHAR(16),
    active BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)