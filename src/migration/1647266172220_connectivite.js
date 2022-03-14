module.exports = {
  up: `CREATE TABLE IF NOT EXISTS connectivite
    (
        id INT PRIMARY KEY auto_increment,
        bluetooth  BOOLEAN DEFAULT FALSE,
        norme_bluetooth VARCHAR(255) NOT NULL,
        wifi BOOLEAN DEFAULT FALSE,
        norme_wifi VARCHAR(255) NOT NULL,
        dlna  BOOLEAN DEFAULT FALSE,
        nfc  BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS connectivite",
};
