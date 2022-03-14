module.exports = {
  up: `CREATE TABLE IF NOT EXISTS category
    (
        id INT PRIMARY KEY auto_increment,
        id_parent INT(10),
        iconFamily VARCHAR(255) NOT NULL,
        icon VARCHAR(255) NOT NULL,
        backgroundColor VARCHAR(50) NOT NULL,
        color VARCHAR(50) NOT NULL,
        active BOOLEAN DEFAULT FALSE,
        level_depth TINYINT(3) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS category",
};
