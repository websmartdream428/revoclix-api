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
    { user_id: admin.user.id.toString() },
    process.env.SECRET_JWT,
    {
      expiresIn: "365d",
    }
  );
  res.json({ type: "success", message: "successfull", token });
};

module.exports = {
  adminLogin,
};
