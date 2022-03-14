USE revoclix_db; 

CREATE TABLE IF NOT EXISTS products
(
    id INT PRIMARY KEY auto_increment,
    ean VARCHAR(13) NOT NULL,
    id_category INT(10) NOT NULL,
    id_brand INT(10) NOT NULL,
    id_status INT(10) NOT NULL,
    id_color INT(10),
    price DECIMAL(13,6) NOT NULL,
    reference VARCHAR(32),
    active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)