const HttpException = require("@utils/HttpException.utils");
const LangModel = require("@models/language.model");

const getAll = async (req, res) => {
  const result = await LanguageModel.getAllLanguage();
  if (result.state) {
    res.json(result);
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const add = async (req, res) => {
  const { body } = req;
  const result = await LanguageModel.addLanguage(body);
  if (result) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const edit = async (req, res) => {
  const { body } = req;
  const result = LanguageModel.editLanguage(body);
  if (result.state) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { language_id } = req.body;
  const result = LanguageModel.removeLanguage(language_id);
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
