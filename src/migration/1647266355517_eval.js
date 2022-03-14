module.exports = {
  up: `CREATE TABLE IF NOT EXISTS eval
    (
        id INT PRIMARY KEY auto_increment,
        name VARCHAR(255) NOT NULL,
        fromUserUd INT(10) NOT NULL,
        toUserId INT(10) NOT NULL,
        description TEXT,
        star TINYINT(1) NOT NULL,
        orders INT(10) NOT NULL,
        actif BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS eval",
};
