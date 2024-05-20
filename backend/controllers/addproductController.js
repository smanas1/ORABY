const productModel = require("../model/productModel");

const addProductController = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(401).send("Please Enter Product Name");
    }
    if (!req.body.des) {
      return res.status(401).send("Please Enter Product Description");
    }
    if (!req.file) {
      return res.status(401).send("Please Upload a Product Image");
    }
    const data = new productModel({
      name: req.body.name,
      des: req.body.des,
      image: `/uploads/${req.file.filename}`,
    });
    await data.save();
    res.send("Product Added");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = addProductController;
