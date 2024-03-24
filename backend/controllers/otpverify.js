const userModel = require("../model/userModel");

const otpVerify = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(401).send("This Email Not Found");
    }
    if (!user.emailverifyed && user.otp == otp) {
      const verify = await userModel.findOneAndUpdate(
        { email: email },
        { otp: "", emailverifyed: true }
      );
      res.status(200).send("Verify Success");
    } else {
      res.status(401).send("OTP! Don't Match");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = otpVerify;
