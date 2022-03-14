module.exports = {
  up: `CREATE TABLE IF NOT EXISTS order_state
  (
      id INT PRIMARY KEY auto_increment,
      invoice TINYINT(1),
      send_email TINYINT(1),
      color VARCHAR(32),
      delivery TINYINT(1)
  )`,
  down: "DROP TABLE IF EXISTS order_state",
};
