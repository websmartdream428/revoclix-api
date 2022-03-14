module.exports = {
  up: `CREATE TABLE IF NOT EXISTS users
    (
        id INT PRIMARY KEY auto_increment,
        id_gender INT(10),
        name VARCHAR(50) NOT NULL,
        firstname VARCHAR(25) NOT NULL,
        username VARCHAR(25) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        email_valid BOOLEAN DEFAULT FALSE,
        google_account VARCHAR(255) NOT NULL,
        facebook_account VARCHAR(255) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        phone_valid BOOLEAN DEFAULT FALSE,
        description TEXT,
        birthday DATE,
        ip_registration VARCHAR(15),
        cities_id INT(10) NOT NULL,
        lvl TINYINT(1) NOT NULL,
        active BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  down: "DROP TABLE IF EXISTS users",
};
