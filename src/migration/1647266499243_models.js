module.exports = {
  up: `CREATE TABLE IF NOT EXISTS models
  (
      id INT PRIMARY KEY auto_increment,
      name VARCHAR(255) NOT NULL,
      brands_id INT(10) NOT NULL,
      network_type_id INT(10) NOT NULL,
      connectivite_id INT(10) NOT NULL,
      materiel_technique_id INT(10) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS models",
};
