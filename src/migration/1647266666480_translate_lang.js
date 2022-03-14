module.exports = {
  up: `CREATE TABLE IF NOT EXISTS translate_lang
  (
      id_translate INT(10),
      id_lang int(10),
      name VARCHAR(128) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS translate_lang",
};
