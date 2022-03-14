USE revoclix_db; 

CREATE TABLE IF NOT EXISTS materiel_technique
(
    id INT PRIMARY KEY auto_increment,
    color_id INT(10) NOT NULL,
    width VARCHAR(255) NOT NULL,
    height VARCHAR(255) NOT NULL,
    depth VARCHAR(255) NOT NULL,
    weight VARCHAR(255) NOT NULL,
    digital_touch BOOLEAN DEFAULT FALSE,
    digital_size VARCHAR(255) NOT NULL,
    processor_id INT(10) NOT NULL,
    ram_id INT(10) NOT NULL,
    memory_id INT(10) NOT NULL,
    os_id INT(10) NOT NULL,
    das VARCHAR(255) NOT NULL,
    type_sim_id INT(10) NOT NULL,
    double_sim BOOLEAN DEFAULT FALSE,
    virtual_sim BOOLEAN DEFAULT FALSE,
    SD BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remove_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)