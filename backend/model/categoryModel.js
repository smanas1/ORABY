const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  status: {
    type: "string",
    enum: ["waiting", "aproved", "rejected"],
    default: "waiting",
  },
});

module.exports = mongoose.model("Category", categorySchema);
