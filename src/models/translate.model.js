const DBConnection = require("@db/db-connection");
const Tables = require("@config/tables");

const getAllTranslate = async () => {
  const sql = `SELECT * FROM ${Tables.tb_translate} as trans INNER JOIN ${Tables.tb_translate} as trans_lang ON trans.id = trans_lang.id_translate`;
  try {
    const result = await DBConnection.query(sql);
    return { data: result, state: true };
  } catch (error) {
    console.log(error);
    return { state: false };
  }
};

const addTranslate = async (params) => {
  const { _key, id_translate, name } = params;
  const sql = `INSERT INTO ${Tables.tb_translate} (_key, created_at, update_at, remove_on) VALUES (?,now(),now(),now())`;
  try {
    const result = await DBConnection.query(sql, [_key]);

    let valueSQL = "";
    for (let i = 0; i < name.length; i++) {
      valueSQL += `(${id_translate}, ${name[i].lang}, ${name[i].text}, now(), now(), now())`;
      if (name.length - 1 === i) {
        return;
      } else {
        valueSQL += ",";
      }
    }

    console.log(valueSQL);

    const sql_translate = `
        INSERT INTO ${Tables.tb_translate_lang}
            (id_translate, id_lang, name, created_at, update_at, remove_on)
        VALUES ${valueSQL}`;
    await DBConnection.query(sql_translate, []);
    return {
      state: true,
      data: {
        ...params,
        id: result.insertId,
      },
    };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const editTranslate = async (params) => {
  const { id, _key, id_translate, name } = params;
  const sql = `UPDATE INTO ${Tables.tb_category} SET _key = ?, update_at = now() WHERE id = ${id} `;
  try {
    const result = await DBConnection.query(sql, [_key]);

    let setSQL = "",
      whereSQL = "";
    for (let i = 0; i < name.length; i++) {
      setSQL += `when id_lang = ${name[i].lang} then ${name[i].text} `;
      whereSQL += `${name[i].lang}`;
      if (name.length - 1 === i) {
        return;
      } else {
        whereSQL += ",";
      }
    }

    console.log(valueSQL);

    const sql_translate = `
        UPDATE ${Tables.tb_translate_lang}
            SET name = (case ${setSQL} end),
                update_at = now()
            WHERE id_lang in (${whereSQL}) AND id_translate = ${id};`;
    await DBConnection.query(sql_translate, []);
    return {
      state: true,
      data: {
        ...params,
        id: result.insertId,
      },
    };
  } catch (error) {
    console.log(error);
    return { state: false, data: {} };
  }
};

const removeTranslate = async (id) => {
  const sql = `DELETE FROM ${Tables.tb_translate} WHERE id=${id};`;
  const sql_category = `DELETE FROM ${Tables.tb_translate_lang} WHERE id_translate=${id};`;
  try {
    await DBConnection.query(sql);
    await DBConnection.query(sql_category);
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
