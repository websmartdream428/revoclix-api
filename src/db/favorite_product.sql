USE revoclix_db; 

CREATE TABLE IF NOT EXISTS favorite_product
(
    id INT PRIMARY KEY auto_increment,
    id_users INT(10) NOT NULL,
    id_product INT(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)