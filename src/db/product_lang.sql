USE revoclix_db; 

CREATE TABLE IF NOT EXISTS product_lang
(
    id_product int(10),
    id_lang int(10),
    name VARCHAR(128) NOT NULL,
    description TEXT,
    url_rewriting varchar (128),
    meta_title VARCHAR(128),
    meta_keywords VARCHAR(128),
    meta_description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)