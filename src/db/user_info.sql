USE revoclix_db; 

CREATE TABLE IF NOT EXISTS user_info
(
    id INT PRIMARY KEY auto_increment,
    id_user INT(10),
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    google_account VARCHAR(255) NOT NULL,
    facebook_account VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    phone_valid BOOLEAN DEFAULT FALSE,
    description TEXT,
    birthday DATE,
    ip_registration VARCHAR(15),
    cities_id INT(10) NOT NULL,
    lvl TINYINT(1) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)