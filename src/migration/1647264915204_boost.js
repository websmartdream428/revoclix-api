module.exports = {
  up: `CREATE TABLE IF NOT EXISTS boost
    (
        id INT PRIMARY KEY auto_increment,
        id_product INT(10) NOT NULL,
        active BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS boost",
};
