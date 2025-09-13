const express = require("express");
const {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
} = require("../controller/incomeController");
const { protect } = require("../middleware/authMiddleware");

const route = express.Router();

route.post("/add", protect, addIncome);
route.get("/get", protect, getAllIncome);
route.get("/downloadExcel", protect, downloadIncomeExcel);
route.delete("/:id", protect, deleteIncome);

module.exports = route;
