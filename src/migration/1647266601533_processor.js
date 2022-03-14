module.exports = {
  up: `CREATE TABLE IF NOT EXISTS processor
  (
      id INT PRIMARY KEY auto_increment,
      processor VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS processor",
};