USE revoclix_db; 

CREATE TABLE IF NOT EXISTS product_status
(
    id INT PRIMARY KEY auto_increment,
    _order INT(1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)