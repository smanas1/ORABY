const mongoose = require("mongoose");

const mongoConfig = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("mongodb connection established");
  });
};

module.exports = mongoConfig;
