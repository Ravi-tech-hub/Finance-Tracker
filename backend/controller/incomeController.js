const Income = require("../model/Income");
const user = require("../model/User");
const jwt = require("jsonwebtoken");
const xlsx = require("xlsx");
exports.addIncome = async (req, res) => {
  const userId = req.user._id;
  try {
    const { icon, source, amount, date } = req.body;
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All field are Required" });
    }
    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });
    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};
exports.getAllIncome = async (req, res) => {
  const userId = req.user._id;
  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.json(income);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};
exports.deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: "Income delete sucessfully" });
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};
exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user._id;
  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date,
    }));
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "income");
    xlsx.writeFile(wb, "income_details.xlsx");
    res.download("income_details.xlsx");
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};
