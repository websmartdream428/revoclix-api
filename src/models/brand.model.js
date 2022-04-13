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
  try {
    const { id, name, logo, active, id_lang, meta_title, description } = params;
    const sql = `UPDATE ${Tables.tb_brands} SET name = ?, logo = ?, active = ?, update_at = now() WHERE id = ${id}`;
    await DBConnection.query(sql, [name, logo, active]);
    const check_lang_sql = `SELECT * FROM ${Tables.tb_brands_lang} WHERE id_lang=? AND id_brands=?`;
    const result = await DBConnection.query(check_lang_sql, [id_lang, id]);
    if (result.length > 0) {
      const sql_lang = `UPDATE ${Tables.tb_brands_lang} SET meta_title = ?, description = ?, update_at = now() WHERE id_brands = ${id} AND id_lang = ?`;
      await DBConnection.query(sql_lang, [meta_title, description, id_lang]);
    } else {
      const sql_lang = `INSERT INTO ${Tables.tb_brands_lang} (id_brands, id_lang, meta_title,  description, created_at, update_at, remove_on) VALUES (?,?,?,?,now(),now(),now())`;
      await DBConnection.query(sql_lang, [
        id,
        id_lang,
        meta_title,
        description,
      ]);
    }
    const result_sql = `SELECT * from ${Tables.tb_brands} as brands INNER JOIN ${Tables.tb_brands_lang} as brands_lang ON brands.id = brands_lang.id_brands WHERE brands_lang.id_brands = ${id} AND brands_lang.id_lang = ${id_lang}`;
    const _result = await DBConnection.query(result_sql);
    return { state: true, data: _result[0] };
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
