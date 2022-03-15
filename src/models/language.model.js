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
  const { name, active, iso_code } = params;
  const sql = `INSERT INTO ${Tables.tb_brands} (name, active, iso_code, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?)`;
  try {
    await DBConnection.query(sql, [
      name,
      active,
      iso_code,
      Date.now(),
      Date.now(),
      Date.now(),
    ]);

    //   const resData = {
    //     id_parent,
    //     iconFamily,
    //     icon,
    //     backgroundColor,
    //     color,
    //     active,
    //     level_depth,
    //     id_lang,
    //     name,
    //     description,
    //     url_rewriting,
    //     meta_title,
    //     meta_keywords,
    //     meta_description,
    //   };
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const editLanguage = async (params) => {
  const { id, name, active, iso_code } = params;
  const sql = `UPDATE ${Tables.tb_brands} SET name = ?, active = ?, iso_code = ?, update_at = ? WHERE id = ${id}`;
  try {
    await DBConnection.query(sql, [name, active, iso_code, Date.now()]);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const removeLanguage = async (id) => {
  const sql = `DELETE FROM ${Tables.tb_brands} WHERE id=${id};`;
  const sql_lang = `DELETE FROM ${Tables.tb_brands_lang} WHERE id_brands=${id};`;
  try {
    await DBConnection.query(sql);
    await DBConnection.query(sql_lang);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

module.exports = { getAllLanguage, addLanguage, editLanguage, removeLanguage };
