const express = require("express");
const {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
} = require("../controller/expenseController");
const { protect } = require("../middleware/authMiddleware");

const route = express.Router();

route.post("/add", protect, addExpense);
route.get("/get", protect, getAllExpense);
route.get("/downloadExcel", protect, downloadExpenseExcel);
route.delete("/:id", protect, deleteExpense);

module.exports = route;
