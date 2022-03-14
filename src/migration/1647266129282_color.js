module.exports = {
  up: `CREATE TABLE IF NOT EXISTS color
    (
        id INT PRIMARY KEY auto_increment,
        color VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS color",
};
