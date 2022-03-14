USE revoclix_db; 

CREATE TABLE IF NOT EXISTS orders
(
    id INT PRIMARY KEY auto_increment,
    id_lang INT(10) NOT NULL,
    id_user INT(10) NOT NULL,
    id_currency INT(10) NOT NULL,
    id_carrier INT(10),
    id_address_delivery INT(10),
    payment VARCHAR(64),
    payment_type VARCHAR(32),
    shipping_number VARCHAR(32),
    total_discount DECIMAL(10,2),
    total_paid  DECIMAL(10,2),
    total_paid_real DECIMAL(10,2),
    total_products DECIMAL(10,2),
    total_shipping DECIMAL(10,2),
    total_com DECIMAL(10,2),
    invoice_number INT(10),
    invoice_date DATETIME,
    status INT(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)