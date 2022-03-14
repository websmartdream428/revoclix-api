module.exports = {
  up: `CREATE TABLE IF NOT EXISTS network_type
  (
      id INT PRIMARY KEY auto_increment,
      model_id INT(10),
      network_id INT(10),
      active BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS network_type",
};
