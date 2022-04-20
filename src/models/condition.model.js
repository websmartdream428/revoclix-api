const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");

const getAllCondition = async () => {
  const sql = `SELECT * from ${Tables.tb_product_status} as _condition INNER JOIN ${Tables.tb_product_status_lang} as condition_lang ON _condition.id = condition_lang.id_product_status`;
  try {
    const result = await DBConnection.query(sql);
    return { data: result, state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const addCondition = async (params) => {
  const { name, _order, description, id_lang } = params;
  const sql = `INSERT INTO ${Tables.tb_product_status} (_order, created_at, update_at, remove_on) VALUES (?,now(),now(),now())`;
  try {
    const result = await DBConnection.query(sql, [_order]);
    const sql_lang = `INSERT INTO ${Tables.tb_product_status_lang} (id_product_status, id_lang, name,  description, created_at, update_at, remove_on) VALUES (?,?,?,?,now(),now(),now())`;
    await DBConnection.query(sql_lang, [
      result.insertId,
      id_lang,
      name,
      description,
    ]);

    return { state: true, data: { ...params, id: result.insertId } };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const editCondition = async (params) => {
  try {
    const { id, name, _order, id_lang, description } = params;
    const sql = `UPDATE ${Tables.tb_product_status} SET _order = ?, update_at = now() WHERE id = ${id}`;
    await DBConnection.query(sql, [_order]);
    const check_lang_sql = `SELECT * FROM ${Tables.tb_product_status_lang} WHERE id_lang=? AND id_product_status=?`;
    const result = await DBConnection.query(check_lang_sql, [id_lang, id]);
    if (result.length > 0) {
      const sql_lang = `UPDATE ${Tables.tb_product_status} SET name = ?, description = ?, update_at = now() WHERE id_product_status = ${id} AND id_lang = ?`;
      await DBConnection.query(sql_lang, [name, description, id_lang]);
    } else {
      const sql_lang = `INSERT INTO ${Tables.tb_product_status_lang} (id_product_status, id_lang, name,  description, created_at, update_at, remove_on) VALUES (?,?,?,?,now(),now(),now())`;
      await DBConnection.query(sql_lang, [id, id_lang, name, description]);
    }
    const result_sql = `SELECT * from ${Tables.tb_product_status} as _condition INNER JOIN ${Tables.tb_product_status_lang} as condition_lang ON _condition.id = condition_lang.id_product_status WHERE condition_lang.id_product_status = ${id} AND condition_lang.id_lang = ${id_lang}`;
    const _result = await DBConnection.query(result_sql);
    return { state: true, data: _result[0] };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const removeCondition = async (id) => {
  const sql = `DELETE FROM ${Tables.tb_product_status} WHERE id=${id};`;
  const sql_lang = `DELETE FROM ${Tables.tb_product_status_lang} WHERE id_product_status=${id};`;
  try {
    await DBConnection.query(sql);
    await DBConnection.query(sql_lang);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

module.exports = {
  getAllCondition,
  addCondition,
  editCondition,
  removeCondition,
};
