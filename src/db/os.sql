USE revoclix_db; 

CREATE TABLE IF NOT EXISTS os
(
    id INT PRIMARY KEY auto_increment,
    os VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)