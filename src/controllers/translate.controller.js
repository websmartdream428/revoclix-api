const HttpException = require("@utils/HttpException.utils");
const TranslateModel = require("@models/translate.model");

const getAll = async (req, res) => {
  const result = await CategoryModel.getAllCategory();
  if (result.state) {
    res.json(result);
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const add = async (req, res) => {
  const { body } = req;
  const result = await TranslateModel.addTranslate(body);
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const edit = async (req, res) => {
  const { body } = req;
  const result = await TranslateModel.editTranslate(body);
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { translate_id } = req.body;
  const result = await TranslateModel.removeTranslate(translate_id);
  if (result.state) {
    res.json({ type: "success", message: "success" });
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
