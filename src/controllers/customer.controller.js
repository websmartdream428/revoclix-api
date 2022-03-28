const HttpException = require("@utils/HttpException.utils");
const CustomerModel = require("@models/customer.model");

const getAll = async () => {
  const result = await CustomerModel.getAllCustomer();
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
    const newBrand = {
      ...body,
      logo: config.base_url + filename,
    };

    const result = await BrandModel.addBrand(newBrand);
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
  const newBrand = {
    ...body,
  };
  if (body.flag_updated) {
    const filename = await fileUpload(req.files.file);
    newBrand.logo = config.base_url + filename;
  } else {
    newBrand.logo = body.filePath;
  }
  const result = await BrandModel.editBrand(newBrand);
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { brand_id } = req.body;
  const result = await BrandModel.removeBrand(brand_id);
  if (result.state) {
    res.json({ type: "success", message: "success" });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

module.exports = { getAll, add, edit, removeById };
