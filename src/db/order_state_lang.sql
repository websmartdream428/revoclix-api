USE revoclix_db; 

CREATE TABLE IF NOT EXISTS order_state_lang
(
    id_order_state INT(10),
    id_lang INT(10),
    name VARCHAR(64)
    template VARCHAR(64)
)