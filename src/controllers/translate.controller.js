const HttpException = require("@utils/HttpException.utils");
const TranslateModel = require("@models/translate.model");

const getAll = async (req, res) => {
  const result = await TranslateModel.getAllTranslate();
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
    throw new HttpException(400, result.data);
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
  const { id } = req.body;
  const result = await TranslateModel.removeTranslate(id);
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
