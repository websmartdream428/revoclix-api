module.exports = {
  up: `CREATE TABLE IF NOT EXISTS cities
  (
      id INT PRIMARY KEY auto_increment,
      name VARCHAR(255) NOT NULL,
      department_code INT(10) NOT NULL,
      continent_name VARCHAR(50) NOT NULL,
      longitude  DOUBLE(17,14) NOT NULL,
      latitude  DOUBLE(16,14) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS cities",
};
