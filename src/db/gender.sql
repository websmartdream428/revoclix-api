USE revoclix_db; 

CREATE TABLE IF NOT EXISTS gender
(
    id INT PRIMARY KEY auto_increment,
    iso_code TINYINT(23),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)