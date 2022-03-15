const HttpException = require("@utils/HttpException.utils");
const BrandModel = require("@models/brand.model");

const getAll = async (req, res) => {
  const result = await BrandModel.getAllBrand();
  if (result.state) {
    res.json(result);
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const add = async (req, res) => {
  const { body } = req;
  const result = await BrandModel.addBrand(body);
  if (result) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const edit = async (req, res) => {
  const { body } = req;
  const result = BrandModel.editBrand(body);
  if (result.state) {
    res.json({ success: true });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { brand_id } = req.body;
  const result = BrandModel.removeBrand(brand_id);
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
