USE revoclix_db; 

CREATE TABLE IF NOT EXISTS order_history
(
    id INT PRIMARY KEY auto_increment,
    id_order INT(10),
    id_order_state INT(10),
    date_add TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)