module.exports = {
  up: `CREATE TABLE IF NOT EXISTS brands_lang
  (
      id_brands INT(10),
      id_lang INT(10),
      meta_title VARCHAR(255),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS brands_lang",
};
