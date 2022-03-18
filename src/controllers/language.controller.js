const HttpException = require("@utils/HttpException.utils");
const LangModel = require("@models/language.model");
const { fileUpload } = require("@utils/fileupload.utils");
const config = require("../../config");

const getAll = async (req, res) => {
  const result = await LangModel.getAllLanguage();
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const add = async (req, res) => {
  try {
    const filename = await fileUpload(req.files.file);
    const { body } = req;
    const newLanguage = {
      ...body,
      flag: config.base_url + filename,
    };
    const result = await LangModel.addLanguage(newLanguage);
    if (result.state) {
      res.json({ type: "success", message: "success", data: result.data });
    } else {
      throw new HttpException(500, `Server Error!`);
    }
  } catch (error) {
    throw new HttpException(500, `Server Error!`);
  }
};

const edit = async (req, res) => {
  const { body } = req;
  const newLanguage = {
    ...body,
  };
  if (body.flag_updated) {
    const filename = await fileUpload(req.files.file);
    newLanguage.flag = config.base_url + filename;
  } else {
    newLanguage.flag = body.filePath;
  }
  const result = await LangModel.editLanguage(newLanguage);
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { language_id } = req.body;
  const result = await LangModel.removeLanguage(language_id);
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
