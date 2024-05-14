const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, async function (err, result) {
        try {
          if (result == true) {
            var token = jwt.sign({ email: user.email }, process.env.JWT_KEY);
            res.send({
              message: "Login success",
              email: user.email,
              role: user.role,
              name: user.name,
              token: token,
            });
          } else {
            res.send("Invalid Password");
          }
          if (err) {
            console.log(err);
          }
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      res.send("Email Not Found");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loginController;
