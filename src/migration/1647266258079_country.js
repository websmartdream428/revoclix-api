module.exports = {
  up: `CREATE TABLE IF NOT EXISTS country
    (
        id INT PRIMARY KEY auto_increment,
        name VARCHAR(255) NOT NULL,
        actif BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS country",
};
