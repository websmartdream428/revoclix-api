module.exports = {
  up: `CREATE TABLE IF NOT EXISTS color_lang
    (
        id_color INT(10),
        id_lang INT(10),
        name VARCHAR(128) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS color_lang",
};
