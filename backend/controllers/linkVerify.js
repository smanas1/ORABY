const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const linkVerify = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, "shhhhh");

    const user = await userModel.findOne({ email: decoded.email });
    if (!user) {
      return res.status(401).send("This Email Not Found");
    }
    if (!user.emailverifyed) {
      const verify = await userModel.findOneAndUpdate(
        { email: decoded.email },
        { otp: "", emailverifyed: true }
      );
      res.status(200).send("Email Verify Successful");
    } else {
      return res.status(401).send("Email Alrady Verified");
    }
  } catch (error) {
    res.status(400).json({ message: "Your verfication link is expired" });
  }
};

module.exports = linkVerify;
