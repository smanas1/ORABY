const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, async function (err, result) {
        try {
          if (result == true) {
            res.send("Login success");
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
