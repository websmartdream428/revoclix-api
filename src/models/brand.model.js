const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");

const getAllBrand = async () => {
  const sql = `SELECT * from ${Tables.tb_brands} as brands INNER JOIN ${Tables.tb_brands_lang} as brands_lang ON brands.id = brands_lang.id_brands`;
  try {
    const result = await DBConnection.query(sql);
    return { data: result, state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const addBrand = async (params) => {
  const { name, active, id_lang, description } = params;
  const sql = `INSERT INTO ${Tables.tb_brands} (name, active, created_at, update_at, remove_on) VALUES (?,?,?,?,?)`;
  try {
    const result = await DBConnection.query(sql, [
      name,
      active,
      Date.now(),
      Date.now(),
      Date.now(),
    ]);

    const sql_lang = `INSERT INTO ${Tables.tb_brands_lang} (id_brands, id_lang,  description, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?)`;
    const result_lang = await DBConnection.query(sql_lang, [
      result.id,
      id_lang,
      description,
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

const editBrand = async (params) => {
  const { id, name, active, id_lang, description } = params;
  const sql = `UPDATE ${Tables.tb_brands} SET name = ?, active = ?, update_at = ? WHERE id = ${id}`;
  const sql_lang = `UPDATE ${Tables.tb_brands_lang} SET id_lang = ?, description = ?, update_at = ? WHERE id_brands = ${id}`;
  try {
    await DBConnection.query(sql, [name, active, Date.now()]);
    await DBConnection.query(sql_lang, [id_lang, description, Date.now()]);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const removeBrand = async (id) => {
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

module.exports = { getAllBrand, addBrand, editBrand, removeBrand };
