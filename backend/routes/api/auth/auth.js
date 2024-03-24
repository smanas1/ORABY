const express = require("express");
const registerController = require("../../../controllers/registrationController");
const secureApi = require("../../../middlewares/secureApi");
const loginController = require("../../../controllers/loginController");
const otpVerify = require("../../../controllers/otpverify");
const linkVerify = require("../../../controllers/linkVerify");
const resendEmail = require("../../../controllers/resendEmail");

const auth = express.Router();

auth.post("/register", secureApi, registerController);
auth.post("/login", loginController);
auth.post("/otpverify", otpVerify);
auth.post("/resendemail", resendEmail);
auth.post("/linkverify", linkVerify);

module.exports = auth;
