const productModel = require("../model/productModel");

const viewAllProduct = async (req, res) => {
  try {
    const data = await productModel.find();
    res.send(data);
  } catch (error) {
    res.status(400).send("Product not found");
  }
};

module.exports = viewAllProduct;
