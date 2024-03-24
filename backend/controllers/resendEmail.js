const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anasolin01777@gmail.com",
    pass: process.env.APP_PASS,
  },
});

const resendEmail = async (req, res) => {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { email } = req.body;
  let existingUser = await User.findOne({ email: email });

  if (!emailRegex.test(email)) {
    return res.status(400).send("Please Enter a valid email");
  }

  if (!existingUser) {
    return res.status(400).send("This Email Not Found");
  }

  if (existingUser.emailverifyed) {
    return res.status(400).send("This Email Already Verified");
  }

  const token = jwt.sign({ email: email }, "shhhhh", {
    expiresIn: "30s",
  });
  const info = await transporter.sendMail({
    from: "Oraby", // sender address
    to: email, // list of receivers
    subject: "Email Verify", // Subject line
    html: `<b>Your Verify Link <a href="http://localhost:3000/linkverify/${token}">Click Here</a> : </b>`, // html body
  });
  res.send({ email: email, token: token });
};

module.exports = resendEmail;
