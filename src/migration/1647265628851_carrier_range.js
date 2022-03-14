module.exports = {
  up: `CREATE TABLE IF NOT EXISTS carrier_range
    (
        id_carrier INT(10),
        delimiter1 DECIMAL(13,6),
        delimiter2 DECIMAL(13,6),
        price FLOAT,
        active BOOLEAN DEFAULT FALSE
    )`,
  down: "DROP TABLE IF EXISTS carrier_range",
};
