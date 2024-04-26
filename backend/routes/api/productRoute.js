const express = require("express");
const addCategoryController = require("../../controllers/addCategoryController");
const addSubCategoryController = require("../../controllers/addSubCategoryController");
const viewAllSubCategory = require("../../controllers/viewAllSubCategory");
const viewAllCategory = require("../../controllers/viewAllCategory");


const router = express.Router();

router.post("/addcategory", addCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.get("/allsubcategory", viewAllSubCategory);
router.get("/allcategory", viewAllCategory);

module.exports = router;
