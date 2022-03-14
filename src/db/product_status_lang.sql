USE revoclix_db; 

CREATE TABLE IF NOT EXISTS product_status_lang
(
    id_product_status INT(10),
    id_lang int(10),
    name VARCHAR(128) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)