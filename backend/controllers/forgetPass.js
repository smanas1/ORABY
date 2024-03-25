const User = require("../model/userModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anasolin01777@gmail.com",
    pass: process.env.APP_PASS,
  },
});

const forgetPass = async (req, res) => {
  const { email } = req.body;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const existingUser = await User.findOne({ email: email });

  if (!emailRegex.test(email)) {
    return res.status(400).send("Please Enter a valid email");
  }

  if (!existingUser) {
    return res.status(401).send("This Email Not Found");
  }

  const token = jwt.sign({ email: email }, "shhhhh", {
    expiresIn: "1m",
  });

  const info = await transporter.sendMail({
    from: "Oraby", // sender address
    to: email, // list of receivers
    subject: "Forget Password", // Subject line
    html: `<b>Your Forget Password Link <a href="http://localhost:3000/forgetpass/${token}">Click Here</a> : </b>`, // html body
  });

  //   console.log(existingUser);
  res.send("Email Sended");
};

module.exports = forgetPass;
