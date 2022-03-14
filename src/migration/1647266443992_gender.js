module.exports = {
  up: `CREATE TABLE IF NOT EXISTS gender
  (
      id INT PRIMARY KEY auto_increment,
      iso_code TINYINT(23),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS gender",
};
