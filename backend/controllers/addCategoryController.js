const categoryModel = require("../model/categoryModel");

const addCategoryController = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(401).send("Please Enter Sub Category Name");
    }

    const existingCategory = await categoryModel.find({
      category: category.toLowerCase(),
    });

    if (existingCategory.length > 0) {
      return res.status(401).send("Category Already Exists");
    }

    const Category = new categoryModel({
      category: category.toLowerCase(),
    });

    await Category.save();

    res.status(200).send("Category Added Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = addCategoryController;
