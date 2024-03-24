const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
require("dotenv").config();
router.use(process.env.API_URI, apiRouter);

module.exports = router;
