module.exports = {
  up: `CREATE TABLE IF NOT EXISTS order_items
  (
      id INT PRIMARY KEY auto_increment,
      product_id INT(10) NOT NULL,
      quantity INT(10) NOT NULL,
      product_price INT(10) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  down: "DROP TABLE IF EXISTS order_items",
};
