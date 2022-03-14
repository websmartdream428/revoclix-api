USE revoclix_db; 

CREATE TABLE IF NOT EXISTS shop
(
    id INT PRIMARY KEY auto_increment,
    cities_id INT(10) NOT NULL,
    merchant_name VARCHAR(255) NOT NULL,
    admin_id INT(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)