const visulizationModel = require("@models/visualization.model");

const HttpException = require("../utils/HttpException.utils");
/*********************************Visualization Controller***************************/
const getMusic = async (req, res, next) => {
  const result = await visulizationModel.getMusic(req.query);
  if (!result.state) {
    throw new HttpException(500, "Something went wrong");
  } else {
    res.send({ type: "success", items: result.items });
  }
};

const getMusicByRandom = async (req, res, next) => {
  const result = await visulizationModel.getMusic();
  if (result) {
    res.send({ type: "success", data: result.items });
  } else {
    throw new HttpException(500, "Something went wrong");
  }
};

const getFrametime = async (req, res, next) => {
  const result = await visulizationModel.getFrametime();
  if (result.state) {
    res.send({ type: "success", items: result.data });
  } else {
    throw new HttpException(500, "Something went wrong");
  }
};

const createVisulization = async (req, res, next) => {
  //TEST DATA
  //   req.body.currentUser = 26;
  //   req.body.musicId = 2;
  //   req.body.frametimeId = 3;

  const { currentUser, musictypeId, frametimeId, photoIds } = req.body;
  const result = await visulizationModel.createVisulization({
    currentUser,
    musictypeId,
    frametimeId,
    photoIds,
  });
  if (!result.state) {
    throw new HttpException(500, "Something went wrong");
  } else {
    res.send({ type: "success" });
  }
};

const getproperty = async (req, res, next) => {
  // TEST DATA
  // req.body.currentUser = 26;
  const { currentUser } = req.body;
  const result = await visulizationModel.getproperty({ currentUser });
  if (!result.state) {
    throw new HttpException(500, "Something went wrong");
  } else {
    res.send({ type: "success", items: result.items });
  }
};

const getMusictype = async (req, res, next) => {
  const result = await visulizationModel.getMusictype();
  if (!result.state) {
    throw new HttpException(500, "Something went wrong");
  } else {
    res.send({ type: "success", items: result.items });
  }
};

const getpreviewphoto = async (req, res, next) => {
  const { currentUser } = req.body;
  const result = await visulizationModel.getpreviewphoto({ currentUser });
  if (!result.state) {
    throw new HttpException(500, "Something went wrong");
  } else {
    res.send({ type: "success", items: result.items });
  }
};

const createImages = async (req, res, next) => {
  const { currentUser, data } = req.body;
  const result = await visulizationModel.createImages({ currentUser, data });
  if (!result.state) {
    throw new HttpException(500, "Something went wrong");
  } else {
    res.send({ type: "success", items: result.items });
  }
};
/***********************************Export*******************************************/
module.exports = {
  //frametime
  getFrametime,
  //visualization
  getproperty,
  createVisulization,
  getpreviewphoto,
  //music
  getMusic,
  getMusicByRandom,
  getMusictype,

  //
  createImages,
};
