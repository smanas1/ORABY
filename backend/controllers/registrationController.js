const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anasolin01777@gmail.com",
    pass: process.env.APP_PASS,
  },
});

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // regex
    let nameRegex = /^[a-zA-Z ]+$/;
    let existingUser = await User.find({ email: email });
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validations
    if (!name || !email || !password) {
      return res.status(401).send("all fildes are required");
    }

    if (!nameRegex.test(name)) {
      return res.status(401).send("Invalid name");
    }

    if (!emailRegex.test(email)) {
      return res.status(401).send("Invalid email");
    }

    if (password.length < 6) {
      return res.status(401).send("password must be at least 6 characters");
    }

    if (existingUser.length > 0) {
      return res.status(401).send("usser already exists");
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        let otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
        });
        const user = new User({
          name: name,
          email: email,
          password: hash,
          otp: otp,
        });
        await user.save();

        res.send({ name: user.name, email: user.email, role: user.role });
        var token = jwt.sign({ email: user.email }, "shhhhh", {
          expiresIn: "30s",
        });
        const info = await transporter.sendMail({
          from: "Oraby", // sender address
          to: email, // list of receivers
          subject: "Link Verify", // Subject line
          html: `<b>Your Verify Link <a href="http://localhost:3000/linkverify/${token}">Click Here</a> : </b>`, // html body
        });
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = registerController;
