module.exports = {
  up: `CREATE TABLE IF NOT EXISTS gender_lang
  (
      id_gender INT(10),
      id_lang INT(10),
      name VARCHAR(16),
      short VARCHAR(4),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS gender_lang",
};
