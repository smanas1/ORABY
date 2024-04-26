const subCategoryModel = require("../model/subCategoryModel");

const viewAllSubCategory = async (req, res) => {
  const data = await subCategoryModel.find().populate("categoryid");
  res.send(data);
};
module.exports = viewAllSubCategory;
