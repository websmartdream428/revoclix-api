const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");
const { multipleColumnSet } = require("@utils/common.utils");

const getAllCategory = async () => {
  const sql = `SELECT * from ${Tables.tb_category} as cate FULL OUTER JOIN ${Tables.tb_category_lang} as cate_lang ON cate.id = cate_lang.id_category`;
  try {
    const result = await DBConnection.query(sql);
    return { data: result, state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const addCategory = async (params) => {
  const {
    id_parent,
    iconFamily,
    icon,
    backgroundColor,
    color,
    active,
    level_depth,
    id_lang,
    name,
    description,
    url_rewriting,
    meta_title,
    meta_keywords,
    meta_description,
  } = params;
  const sql = `INSERT INTO ${Tables.tb_category} (id_parent, iconFamily, icon, backgroundColor, color, active, level_depth, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?,?,?,?,?)`;
  try {
    const result = await DBConnection.query(sql, [
      id_parent,
      iconFamily,
      icon,
      backgroundColor,
      color,
      active,
      level_depth,
      Date.now(),
      Date.now(),
      Date.now(),
    ]);

    const sql_lang = `INSERT INTO ${Tables.tb_category_lang} (id_category, id_lang, name, description, url_rewriting, meta_title, meta_keywords, meta_description, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
    const result_lang = await DBConnection.query(sql_lang, [
      result.id,
      id_lang,
      name,
      description,
      url_rewriting,
      meta_title,
      meta_keywords,
      meta_description,
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

const removeCategory = async (id) => {
  const sql = `DELETE FROM ${Tables.tb_category} WHERE id=${id};`;
  const sql_lang = `DELETE FROM ${Tables.tb_category_lang} WHERE id_category=${id};`;
  try {
    await DBConnection.query(sql);
    await DBConnection.query(sql_lang);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const editCategory = async (params) => {
  const {
    id,
    id_parent,
    iconFamily,
    icon,
    backgroundColor,
    color,
    active,
    level_depth,
    id_lang,
    name,
    description,
    url_rewriting,
    meta_title,
    meta_keywords,
    meta_description,
  } = params;
  const sql = `UPDATE ${Tables.tb_category_lang} SET id_parent = ?, iconFamily = ?, icon = ?, backgroundColor = ?, color = ?, active = ?, level_depth = ? update_at = ? WHERE id = ${id}`;
  const sql_lang = `UPDATE ${Tables.tb_category} SET id_lang = ?, name = ?, description = ?, url_rewriting = ?, meta_title = ?, meta_keywords = ?, meta_description = ? update_at = ? WHERE id_category = ${id}`;
  try {
    await DBConnection.query(sql, [
      id_parent,
      iconFamily,
      icon,
      backgroundColor,
      color,
      active,
      level_depth,
      Date.now(),
    ]);
    await DBConnection.query(sql_lang, [
      id_lang,
      name,
      description,
      url_rewriting,
      meta_title,
      meta_keywords,
      meta_description,
      Date.now(),
    ]);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

module.exports = { addCategory, getAllCategory, editCategory, removeCategory };
