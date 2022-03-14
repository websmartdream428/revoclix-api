module.exports = {
  up: `CREATE TABLE IF NOT EXISTS lang
  (
      id INT PRIMARY KEY auto_increment,
      name VARCHAR(32),
      active BOOLEAN DEFAULT FALSE,
      iso_code CHAR(2),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS lang",
};
