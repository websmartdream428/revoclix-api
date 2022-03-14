module.exports = {
  up: `CREATE TABLE IF NOT EXISTS carrier_range_lang
  (
    id INT PRIMARY KEY auto_increment,
      id_carrier_range INT(10),
      name VARCHAR(32),
      description TEXT
  )`,
  down: "DROP TABLE IF EXISTS carrier_range_lang",
};
