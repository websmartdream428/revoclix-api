const mysql2 = require("mysql2");
const dotenv = require("dotenv");
const migration = require("mysql-migrations");
dotenv.config();

const connection = mysql2.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
});

migration.init(connection, __dirname + "/src/migration", function () {
  console.log("finished running migrations");
});
