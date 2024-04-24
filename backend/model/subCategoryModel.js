const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
  subcategory: {
    type: String,
    required: true,
  },
  status: {
    type: "string",
    enum: ["waiting", "aproved", "rejected"],
    default: "waiting",
  },
  categoryid: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

module.exports = mongoose.model("subcategory", subCategorySchema);
