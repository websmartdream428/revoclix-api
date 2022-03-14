module.exports = {
  up: `CREATE TABLE IF NOT EXISTS type_sim
  (
      id INT PRIMARY KEY auto_increment,
      type_sim VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS type_sim",
};
