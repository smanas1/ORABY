const categoryModel = require("../model/categoryModel");

const categoryDeleteController = async (req, res) => {
  await categoryModel.findByIdAndDelete(req.params.id);
  res.status(200).send("Category Deleted ");
};

module.exports = categoryDeleteController;
