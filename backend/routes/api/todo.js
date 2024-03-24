const express = require("express");
const userModel = require("../../model/userModel");
const todo = express.Router();

// Get All todos
todo.get("/", async (req, res) => {
  try {
    const getAllTodos = await userModel
      .find()
      .select("name email role")
      .sort({ _id: -1 });
    res.send(getAllTodos);
  } catch (error) {
    console.log(error);
  }
});

// Todo Update

todo.put("/update/:id", async (req, res) => {
  try {
    const updateAllTodos = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updateAllTodos);
  } catch (error) {
    console.log(error);
  }
});

// Delete Todo

todo.delete("/delete/:id", async (req, res) => {
  try {
    const deleteAllTodos = await userModel.findByIdAndDelete(req.params.id, {
      new: true,
    });
    res.send("Todo Delete Success");
  } catch (error) {
    console.log(error);
  }
});

module.exports = todo;
