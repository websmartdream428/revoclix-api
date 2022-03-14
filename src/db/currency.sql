USE revoclix_db; 

CREATE TABLE IF NOT EXISTS currency
(
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(64),
    iso_code VARCHAR(3),
    sign VARCHAR(8),
    blank TINYINT(1),
    format TINYINT(1),
    decimals TINYINT(1),
    conversion_rate DECIMAL(13,6),
    active BOOLEAN DEFAULT FALSE
)