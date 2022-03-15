const HttpException = require("@utils/HttpException.utils");
const CategoryModel = require("../models/category.model");

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
  const result = await CategoryModel.addCategory(body);
  if (result) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { category_id } = req.body;
  const result = await CategoryModel.removeCategory(category_id);
  if (result) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

module.exports = {
  getAll,
  add,
  removeById,
};
