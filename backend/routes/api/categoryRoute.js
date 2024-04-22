const express = require("express");
const register = require("./auth/auth");
const addCategoryController = require("../../controllers/addCategoryController");

const router = express.Router();

router.post("/addcategory", addCategoryController);

module.exports = router;
