const categoryModel = require("../model/categoryModel");

const viewAllCategory = async (req, res) => {
  const data = await categoryModel.find()
  res.send(data);
};
module.exports = viewAllCategory;
