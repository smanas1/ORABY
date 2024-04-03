const express = require("express");
const mongoConfig = require("./config/mongoConfig");
const cors = require("cors");
const router = require("./routes");
require("dotenv").config();
// Middleware configuration
const app = express();
app.use(cors());
app.use(express.json());
const Port = process.env.PORT || 8000;
app.use(express.static("images"));
// mongodb config
mongoConfig();

// Routes
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Oreby Backend");
});
app.listen(Port, () => {
  console.log("server start");
});
