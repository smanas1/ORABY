const subCategoryModel = require("../model/subCategoryModel");

const addSubCategoryController = async (req, res) => {
  try {
    const { subcategory, categoryid } = req.body;

    if(!subcategory){
      return res.status(401).send("Please Enter Sub Category Name");

    }
    if(!categoryid){
      return res.status(401).send("Please Select a Category");
    }

    const existingSubCategory = await subCategoryModel.find({
      subcategory: subcategory.toLowerCase(),
    });

    if (existingSubCategory.length > 0) {
      return res.status(401).send("Sub Category Already Exists");
    }

    const subCategory = new subCategoryModel({
      subcategory: subcategory.toLowerCase(),
      categoryid: categoryid,
    });

    await subCategory.save();

    res.status(200).send("Sub Category Added Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = addSubCategoryController;
