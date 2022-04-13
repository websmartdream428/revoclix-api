module.exports = {
  up: `CREATE TABLE IF NOT EXISTS lang
  (
      id INT PRIMARY KEY auto_increment,
      flag VARCHAR(255),
      name VARCHAR(32),
      code VARCHAR(50),
      active BOOLEAN DEFAULT FALSE,
      t_active BOOLEAN DEFAULT FALSE,
      iso_code CHAR(10),
      date_format VARCHAR(20),
      date_format_full VARCHAR(20),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS lang",
};
