const categoryModel = require("../model/categoryModel");

const aproveCategoryController = async (req, res) => {
  try {
    const { id, status } = req.body;
    const data = await categoryModel.findByIdAndUpdate(
      { _id: id },
      {
        status: status == "waiting" ? "aproved" : "rejected",
      },
      { new: true }
    );
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = aproveCategoryController;
