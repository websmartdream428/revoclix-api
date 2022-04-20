const HttpException = require("@utils/HttpException.utils");
const ConditionModel = require("@models/condition.model");

const getAll = async (req, res) => {
  const result = await ConditionModel.getAllCondition();
  if (result.state) {
    res.json(result);
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const add = async (req, res) => {
  const result = await ConditionModel.addCondition(req.body);
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const edit = async (req, res) => {
  const result = await ConditionModel.editCondition(req.body);
  if (result.state) {
    res.json({ type: "success", message: "success", data: result.data });
  } else {
    throw new HttpException(500, `Server Error!`);
  }
};

const removeById = async (req, res) => {
  const { condition_id } = req.body;
  const result = await ConditionModel.removeCondition(condition_id);
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
