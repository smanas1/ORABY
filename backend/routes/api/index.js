const express = require("express");
const register = require("./auth/auth");
const auth = require("./auth/auth");
const todo = require("./todo");

const router = express.Router();

router.use("/auth", auth);
router.use("/todo", todo);

module.exports = router;
