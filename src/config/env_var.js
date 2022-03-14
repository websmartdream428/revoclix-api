import dotenv from "dotenv";
dotenv.config();

const env_var = Object.freeze({
  SERVERPORT: process.env.SERVERPORT || "",
  SECRET_JWT: process.env.SECRET_JWT || "",
  DB_HOST: process.env.DB_HOST || "",
  DB_USER: process.env.DB_USER || "",
  DB_PASS: process.env.DB_PASS || "",
  DB_BASE: process.env.DB_BASE || "",
});

export default env_var;
