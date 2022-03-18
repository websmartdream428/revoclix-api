module.exports = {
  up: `CREATE TABLE IF NOT EXISTS brands
  (
      id INT PRIMARY KEY auto_increment,
      name VARCHAR(64),
      active BOOLEAN DEFAULT FALSE,
      logo VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS brands",
};
