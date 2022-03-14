module.exports = {
  up: `CREATE TABLE IF NOT EXISTS network
  (
      id INT PRIMARY KEY auto_increment,
      name VARCHAR(255) NOT NULL,
      bandle VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS network",
};
