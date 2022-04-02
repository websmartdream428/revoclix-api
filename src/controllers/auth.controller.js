const HttpException = require("@utils/HttpException.utils");
const AuthModel = require("@models/auth.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await AuthModel.checkAdmin({ email });
  if (!admin.state) {
    throw new HttpException(400, "Incorrect account");
  }
  const isMatch = await bcrypt.compare(password, admin.user.password);
  if (!isMatch) {
    throw new HttpException(400, "Incorrect password");
  }
  const token = jwt.sign(
    {
      id: admin.user.id.toString(),
      username: admin.user.username,
      email: admin.user.email,
      subscribe: admin.user.subscribe,
    },
    process.env.SECRET_JWT,
    {
      expiresIn: "365d",
    }
  );
  res.json({ type: "success", message: "successfull", token });
};

const userRegister = async (req, res) => {
  const { email, username, subscribe } = req.body;
  const password = await bcrypt.hash(req.body.password, 8);
  const result = await AuthModel.userRegister({
    email,
    password,
    username,
    subscribe,
  });

  if (!result.state) {
    throw new HttpException(400, "This email already exist.");
  }
  res.json({ type: "success", message: "successfull", data: result.data });
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthModel.userLogin({ email });
  if (!result.state) {
    throw new HttpException(400, "Unregistered User.");
  }
  const isMatch = await bcrypt.compare(password, result.user.password);
  if (!isMatch) {
    throw new HttpException(400, "Incorrect Password.");
  }
  const token = jwt.sign(
    {
      id: result.user.id.toString(),
      username: result.user.username,
      email: result.user.email,
      subscribe: result.user.subscribe,
    },
    process.env.SECRET_JWT,
    {
      expiresIn: "365d",
    }
  );
  res.json({ type: "success", message: "successfull", token });
};

module.exports = {
  adminLogin,
  userRegister,
  userLogin,
};
