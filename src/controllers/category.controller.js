const HttpException = require("@utils/HttpException.utils");
const CategoryModel = require("../models/category.model");
const { fileUpload } = require("@utils/fileupload.utils");
const config = require("../../config");

const getAll = async (req, res) => {
  const result = await CategoryModel.getAllCategory();
  if (result.state) {
    res.json(result);
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const add = async (req, res) => {
  try {
    const filename = await fileUpload(req.files.file);
    const { body } = req;
    const newCategory = {
      ...body,
      icon: config.base_url + filename,
    };

    const result = await CategoryModel.addCategory(newCategory);
    if (result.state) {
      res.json({ type: "success", message: "success", data: result.data });
    } else {
      throw new HttpException(500, `Server Error!`);
    }
  } catch (error) {}
};

const edit = async (req, res) => {
  const { body } = req;
  const newCategory = {
    ...body,
  };
  if (body.flag_updated) {
    const filename = await fileUpload(req.files.file);
    newCategory.icon = config.base_url + filename;
  } else {
    newCategory.icon = body.filePath;
  }
  const result = await CategoryModel.editCategory(newCategory);
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { category_id } = req.body;
  const result = await CategoryModel.removeCategory(category_id);
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
