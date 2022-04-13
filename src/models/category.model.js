const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");
// const { multipleColumnSet } = require("@utils/common.utils");

const getAllCategory = async () => {
  const sql = `SELECT * FROM ${Tables.tb_category} as cate INNER JOIN ${Tables.tb_category_lang} as cate_lang ON cate.id = cate_lang.id_category`;
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
  const sql = `INSERT INTO ${Tables.tb_category} (id_parent, iconFamily, icon, backgroundColor, color, active, level_depth, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?,?,now(),now(),now())`;
  try {
    const result = await DBConnection.query(sql, [
      id_parent,
      iconFamily,
      icon,
      backgroundColor,
      color,
      active,
      level_depth,
    ]);

    const sql_category = `INSERT INTO ${Tables.tb_category_lang} (id_category, id_lang, name, description, url_rewriting, meta_title, meta_keywords, meta_description, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?,?,?,now(),now(),now())`;
    await DBConnection.query(sql_category, [
      result.insertId,
      id_lang,
      name,
      description,
      url_rewriting,
      meta_title,
      meta_keywords.toString(),
      meta_description,
    ]);
    return {
      state: true,
      data: {
        ...params,
        meta_keywords: meta_keywords.toString,
        id: result.insertId,
      },
    };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const editCategory = async (params) => {
  try {
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
    const sql = `UPDATE ${Tables.tb_category} SET id_parent = ?, iconFamily = ?, icon = ?, backgroundColor = ?, color = ?, active = ?, level_depth = ?, update_at = now() WHERE id = ${id}`;
    await DBConnection.query(sql, [
      id_parent,
      iconFamily,
      icon,
      backgroundColor,
      color,
      active,
      level_depth,
    ]);

    const check_lang_sql = `SELECT * FROM ${Tables.tb_category_lang} WHERE id_lang=? AND id_category=?`;
    const result = await DBConnection.query(check_lang_sql, [id_lang, id]);
    if (result.length > 0) {
      const sql_category = `UPDATE ${Tables.tb_category_lang} SET id_lang = ?, name = ?, description = ?, url_rewriting = ?, meta_title = ?, meta_keywords = ?, meta_description = ?, update_at = now() WHERE id_category = ${id} AND id_lang = ${id_lang}`;
      await DBConnection.query(sql_category, [
        id_lang,
        name,
        description,
        url_rewriting,
        meta_title,
        meta_keywords.toString(),
        meta_description,
      ]);
    } else {
      console.log(
        id,
        id_lang,
        name,
        description,
        url_rewriting,
        meta_title,
        meta_keywords.toString(),
        meta_description
      );
      const sql_category = `INSERT INTO ${Tables.tb_category_lang} (id_category, id_lang, name, description, url_rewriting, meta_title, meta_keywords, meta_description, created_at, update_at, remove_on) VALUES (?,?,?,?,?,?,?,?,now(),now(),now())`;
      await DBConnection.query(sql_category, [
        id,
        id_lang,
        name,
        description,
        url_rewriting,
        meta_title,
        meta_keywords.toString(),
        meta_description,
      ]);
    }
    const result_sql = `SELECT * FROM ${Tables.tb_category} as cate INNER JOIN ${Tables.tb_category_lang} as cate_lang ON cate.id = cate_lang.id_category WHERE cate_lang.id_category = ${id} AND cate_lang.id_lang = ${id_lang}`;
    const _result = await DBConnection.query(result_sql);
    return {
      state: true,
      data: _result[0],
    };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const removeCategory = async (id) => {
  const sql = `DELETE FROM ${Tables.tb_category} WHERE id=${id};`;
  const sql_category = `DELETE FROM ${Tables.tb_category_lang} WHERE id_category=${id};`;
  try {
    await DBConnection.query(sql);
    await DBConnection.query(sql_category);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

module.exports = { addCategory, getAllCategory, editCategory, removeCategory };
