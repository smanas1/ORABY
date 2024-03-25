const express = require("express");
const registerController = require("../../../controllers/registrationController");
const secureApi = require("../../../middlewares/secureApi");
const loginController = require("../../../controllers/loginController");
const otpVerify = require("../../../controllers/otpverify");
const linkVerify = require("../../../controllers/linkVerify");
const resendEmail = require("../../../controllers/resendEmail");
const forgetPass = require("../../../controllers/forgetPass");
const newPassword = require("../../../controllers/newPassword");

const auth = express.Router();

auth.post("/register", secureApi, registerController);
auth.post("/login", loginController);
auth.post("/otpverify", otpVerify);
auth.post("/resendemail", resendEmail);
auth.post("/linkverify", linkVerify);
auth.post("/forgetPass", forgetPass);
auth.post("/newpassword", newPassword);

module.exports = auth;
