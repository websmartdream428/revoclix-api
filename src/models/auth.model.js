const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");
const { multipleColumnSet } = require("@utils/common.utils");

const checkAdmin = async (params) => {
  const { columnSet, values } = multipleColumnSet(params);

  const sql = `SELECT * FROM ${Tables.tb_users} WHERE ${columnSet}`;
  const result = await DBConnection.query(sql, [...values]);
  if (result.length === 0) {
    return {
      state: false,
      user: [],
    };
  }
  return {
    state: true,
    user: result[0],
  };
};

const userRegister = async (params) => {
  const { email, password } = params;
  const checkSql = `SELECT * FROM ${Tables.tb_users} WHERE email=?`;
  const result = await DBConnection.query(checkSql, [email]);
  if (result.length === 0) {
    const addSql = `INSERT INTO ${Tables.tb_users} (name, firstname, username, password, email, google_account, facebook_account, phone, cities_id, lvl) VALUES (?,?,?,?,?,?,?,?,?,?, now(),now(),now())`;
    try {
      await DBConnection.query(addSql, [
        "Empty",
        "Empty",
        "Empty",
        password,
        email,
        "Empty",
        "Empty",
        -1,
        -1,
      ]);
      return {
        state: true,
      };
    } catch (error) {
      console.log(error);
      return {
        state: false,
      };
    }
  }
  return {
    state: true,
  };
};

const userLogin = async (params) => {
  const { email } = params;
  const sql = `SELECT * FROM ${Tables.tb_users} WHERE email=?`;
  const result = await DBConnection.query(sql, [email]);
  if (result.length === 0) {
    return {
      state: false,
      user: [],
    };
  }
  return {
    state: true,
    user: result[0],
  };
};

module.exports = { checkAdmin, userRegister, userLogin };
