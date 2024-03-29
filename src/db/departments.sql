USE revoclix_db; 

CREATE TABLE IF NOT EXISTS departments
(
    id INT PRIMARY KEY auto_increment,
    region_code INT(10) NOT NULL,
    code VARCHAR(3) NOT NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)