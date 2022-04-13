const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");

const getAllTranslate = async () => {
  const sql = `SELECT * FROM ${Tables.tb_translate} as trans INNER JOIN ${Tables.tb_translate_lang} as trans_lang ON trans.id = trans_lang.id_translate`;
  try {
    const result = await DBConnection.query(sql);
    return { data: result, state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const addTranslate = async (params) => {
  const { _key, langData } = params;
  const validationSQL = `SELECT * FROM ${Tables.tb_translate} WHERE _key="${_key}"`;
  const valid = await DBConnection.query(validationSQL);
  if (valid.length > 0) {
    return { state: false, data: "Key is already exist." };
  } else {
    const sql = `INSERT INTO ${Tables.tb_translate} (_key, created_at, update_at, remove_on) VALUES (?,now(),now(),now())`;
    try {
      const result = await DBConnection.query(sql, [_key]);
      let valueSQL = "";
      for (let i = 0; i < langData.length; i++) {
        valueSQL += `(${result.insertId}, ${langData[i].lang}, "${langData[i].text}", now(), now(), now())`;
        if (langData.length - 1 === i) {
          valueSQL += "";
        } else {
          valueSQL += ",";
        }
      }

      const sql_translate = `
        INSERT INTO ${Tables.tb_translate_lang}
            (id_translate, id_lang, name, created_at, update_at, remove_on)
        VALUES ${valueSQL}`;
      await DBConnection.query(sql_translate, []);
      const select_sql = `SELECT * FROM ${Tables.tb_translate} as trans INNER JOIN ${Tables.tb_translate_lang} as trans_lang ON trans.id = trans_lang.id_translate WHERE trans.id = ${result.insertId}`;
      const addData = await DBConnection.query(select_sql);

      return {
        state: true,
        data: [...addData],
      };
    } catch (error) {
      console.log(error);
      return { state: false, data: "Server Error!" };
    }
  }
};

const editTranslate = async (params) => {
  const { id, _key, langData } = params;
  const sql = `UPDATE ${Tables.tb_translate} SET _key = ?, update_at = now() WHERE id = ${id} `;
  try {
    await DBConnection.query(sql, [_key]);
    let setSQL = "",
      whereSQL = "";
    for (let i = 0; i < langData.length; i++) {
      const check_sql = `SELECT * FROM ${Tables.tb_translate_lang} WHERE id_translate=${id} AND id_lang=${langData[i].lang}`;
      const check_res = await DBConnection.query(check_sql);
      if (check_res.length > 0) {
        setSQL += `when id_lang = ${langData[i].lang} then "${langData[i].text}" `;
        whereSQL += `${langData[i].lang}`;
        whereSQL += ",";
      } else {
        const add_sql = `
        INSERT INTO ${Tables.tb_translate_lang}
            (id_translate, id_lang, name, created_at, update_at, remove_on)
        VALUES (?,?,?,now(),now(),now())`;
        await DBConnection.query(add_sql, [
          id,
          langData[i].lang,
          langData[i].text,
        ]);
      }
    }

    const sql_translate = `
        UPDATE ${Tables.tb_translate_lang}
            SET name = (case ${setSQL} end),
                update_at = now()
            WHERE id_lang in (${whereSQL.slice(
              0,
              whereSQL.length - 1
            )}) AND id_translate = ${id};`;

    await DBConnection.query(sql_translate, []);
    const select_sql = `SELECT * FROM ${Tables.tb_translate} as trans INNER JOIN ${Tables.tb_translate_lang} as trans_lang ON trans.id = trans_lang.id_translate`;
    const addData = await DBConnection.query(select_sql);
    return {
      state: true,
      data: [...addData],
    };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const removeTranslate = async (id) => {
  const sql = `DELETE FROM ${Tables.tb_translate} WHERE id=${id};`;
  const sql_translate = `DELETE FROM ${Tables.tb_translate_lang} WHERE id_translate=${id};`;
  try {
    await DBConnection.query(sql);
    await DBConnection.query(sql_translate);
    return { state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

module.exports = {
  addTranslate,
  getAllTranslate,
  editTranslate,
  removeTranslate,
};
