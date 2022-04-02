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
  const { username, email, password, subscribe } = params;
  const checkSql = `SELECT * FROM ${Tables.tb_users} WHERE email=? OR username=?`;
  const result = await DBConnection.query(checkSql, [email, username]);
  if (result.length === 0) {
    const addSql = `INSERT INTO ${Tables.tb_users} (username, password, email, subscribe, created_at, update_at, remove_on) VALUES (?,?,?,?, now(),now(),now())`;
    try {
      const insert_res = await DBConnection.query(addSql, [
        username,
        password,
        email,
        subscribe ? 1 : 0,
      ]);
      return {
        state: true,
        data: { ...params, id: insert_res.insertId },
      };
    } catch (error) {
      console.log(error);
      return {
        state: false,
      };
    }
  }
  return {
    state: false,
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
