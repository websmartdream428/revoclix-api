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
  const { name, logo, active, id_lang, meta_title, description } = params;
  const sql = `INSERT INTO ${Tables.tb_brands} (name, logo, active, created_at, update_at, remove_on) VALUES (?,?,?,now(),now(),now())`;
  try {
    const result = await DBConnection.query(sql, [name, logo, active]);

    const sql_lang = `INSERT INTO ${Tables.tb_brands_lang} (id_brands, id_lang, meta_title,  description, created_at, update_at, remove_on) VALUES (?,?,?,?,now(),now(),now())`;
    await DBConnection.query(sql_lang, [
      result.insertId,
      id_lang,
      meta_title,
      description,
    ]);

    return { state: true, data: { ...params, id: result.insertId } };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const editBrand = async (params) => {
  const { id, name, logo, active, id_lang, meta_title, description } = params;
  const sql = `UPDATE ${Tables.tb_brands} SET name = ?, logo = ?, active = ?, update_at = now() WHERE id = ${id}`;
  const sql_lang = `UPDATE ${Tables.tb_brands_lang} SET id_lang = ?, meta_title = ?, description = ?, update_at = now() WHERE id_brands = ${id}`;
  try {
    await DBConnection.query(sql, [name, logo, active]);
    await DBConnection.query(sql_lang, [id_lang, meta_title, description]);
    return { state: true, data: { ...params } };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
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
