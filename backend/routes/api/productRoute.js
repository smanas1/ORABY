const express = require("express");
const addCategoryController = require("../../controllers/addCategoryController");
const addSubCategoryController = require("../../controllers/addSubCategoryController");
const viewAllSubCategory = require("../../controllers/viewAllSubCategory");
const viewAllCategory = require("../../controllers/viewAllCategory");
const secureApi = require("../../middlewares/secureApi");
const tokenVerify = require("../../middlewares/tokenVerify");
const upload = require("../../middlewares/multer");
const addProductController = require("../../controllers/addproductController");

const router = express.Router();

router.post("/addcategory", secureApi, tokenVerify, addCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.post("/addproduct", upload.single("image"), addProductController);
router.get("/allsubcategory", viewAllSubCategory);
router.get("/allcategory", viewAllCategory);

module.exports = router;
