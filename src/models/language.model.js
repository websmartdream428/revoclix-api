const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");

const getAllLanguage = async () => {
  const sql = `SELECT * from ${Tables.tb_lang}`;
  try {
    const result = await DBConnection.query(sql);
    return { data: result, state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const addLanguage = async (params) => {
  const { name, flag, active, iso_code, date_format, date_format_full, code } =
    params;
  const sql = `INSERT INTO ${Tables.tb_lang} (flag, name, active, code, date_format, date_format_full, iso_code, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?,?,now(),now(),now())`;
  try {
    const result = await DBConnection.query(sql, [
      flag,
      name,
      active,
      code,
      date_format,
      date_format_full,
      iso_code,
    ]);
    return { state: true, data: { ...params, id: result.insertId } };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const editLanguage = async (params) => {
  const {
    id,
    name,
    flag,
    active,
    iso_code,
    date_format,
    date_format_full,
    code,
  } = params;
  const sql = `UPDATE ${Tables.tb_lang} SET name = ?, flag = ?, active = ?, iso_code = ?, code = ?, date_format = ?, date_format_full = ?, update_at = now() WHERE id = ${id}`;
  try {
    await DBConnection.query(sql, [
      name,
      flag,
      active,
      iso_code,
      code,
      date_format,
      date_format_full,
    ]);
    return { state: true, data: { ...params } };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const removeLanguage = async (id) => {
  const sql = `DELETE FROM ${Tables.tb_lang} WHERE id=${id};`;
  try {
    await DBConnection.query(sql);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

module.exports = { getAllLanguage, addLanguage, editLanguage, removeLanguage };
