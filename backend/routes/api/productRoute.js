const express = require("express");
const addCategoryController = require("../../controllers/addCategoryController");
const addSubCategoryController = require("../../controllers/addSubCategoryController");
const viewAllCategory = require("../../controllers/viewAllCategory");

const router = express.Router();

router.post("/addcategory", addCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.get("/allsubcategory", viewAllCategory);

module.exports = router;
