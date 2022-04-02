module.exports = {
  up: `CREATE TABLE IF NOT EXISTS users
    (
        id INT PRIMARY KEY auto_increment,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        email_valid BOOLEAN DEFAULT FALSE,
        role TINYINT(1) DEFAULT 1,
        subscribe BOOLEAN DEFAULT FALSE,
        active BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS users",
};
