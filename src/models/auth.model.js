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

module.exports = { checkAdmin };
