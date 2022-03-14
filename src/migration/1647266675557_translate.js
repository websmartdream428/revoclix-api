module.exports = {
  up: `CREATE TABLE IF NOT EXISTS translate
  (
      id INT PRIMARY KEY auto_increment,
      _key VARCHAR(64),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS translate",
};
