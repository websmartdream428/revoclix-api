module.exports = {
  up: `CREATE TABLE IF NOT EXISTS browser
    (
        id INT PRIMARY KEY auto_increment,
        name VARCHAR(64)
    )`,
  down: "DROP TABLE IF EXISTS browser",
};
