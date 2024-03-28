const userModel = require("../model/userModel");

const emailVerifyCheck = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user.emailverifyed) {
      next();
    } else {
      return res.status(401).send("Please Verify your email");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = emailVerifyCheck;
