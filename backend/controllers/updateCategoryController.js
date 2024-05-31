const categoryModel = require("../model/categoryModel");

const updateCategoryController = async (req, res) => {
  const { category, id } = req.body;
  if (!category) {
    return res.status(401).send("Please Enter Category Name");
  }

  const existingCategory = await categoryModel.find({
    category: category.toLowerCase(),
  });

  if (existingCategory.length > 0) {
    return res.status(401).send("Category Already Exists");
  }

  const updatedCategory = await categoryModel.updateOne(
    { _id: id },
    { category: category.toLowerCase() }
  );

  if (!updatedCategory) {
    return res.status(401).send("Category Not Found");
  }

  return res.status(200).send("Category Updated Successfully");
};
module.exports = updateCategoryController;
