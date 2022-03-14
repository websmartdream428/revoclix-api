USE revoclix_db; 

CREATE TABLE IF NOT EXISTS messages
(
    id INT PRIMARY KEY auto_increment,
    product_id INT(10) NOT NULL,
    fromUserId INT(10) NOT NULL,
    toUserId INT(10) NOT NULL,
    content TEXT,
    offer_price VARCHAR(255) NOT NULL,
    active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)