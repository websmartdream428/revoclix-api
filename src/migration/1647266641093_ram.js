module.exports = {
  up: `CREATE TABLE IF NOT EXISTS ram
  (
      id INT PRIMARY KEY auto_increment,
      ram VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS ram",
};
