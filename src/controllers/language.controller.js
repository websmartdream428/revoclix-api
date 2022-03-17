const HttpException = require("@utils/HttpException.utils");
const LangModel = require("@models/language.model");

const getAll = async (req, res) => {
  const result = await LangModel.getAllLanguage();
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const add = async (req, res) => {
  const { body } = req;
  const result = await LangModel.addLanguage(body);
  if (result) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const edit = async (req, res) => {
  const { body } = req;
  const result = LangModel.editLanguage(body);
  if (result.state) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { language_id } = req.body;
  const result = LangModel.removeLanguage(language_id);
  if (result.state) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

module.exports = {
  getAll,
  add,
  edit,
  removeById,
};
