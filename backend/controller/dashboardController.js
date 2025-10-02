const income = require("../model/Income");
const expense = require("../model/Expense");
const user = require("../model/User");
const { isValidObjectId, Types } = require("mongoose");

exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id;
    const userObjectId = new Types.ObjectId(String(userId));

    const totalIncome = await income.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    console.log("totalIncome", {
      totalIncome,
      UserId: isValidObjectId(userId),
    });

    const totalExpense = await expense.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    console.log("totalexpense", {
      totalExpense,
      UserId: isValidObjectId(userId),
    });

    const last60DaysIncomeTransction = await income
      .find({
        userId,
        date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
      })
      .sort({ date: -1 });

    const incomeLast60Days = last60DaysIncomeTransction.reduce(
      (sum, transction) => sum + transction.amount,
      0
    );

    const last30DaysExpenseTransction = await expense
      .find({
        userId,
        date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      })
      .sort({ date: -1 });

    const expenseLast30Days = last30DaysExpenseTransction.reduce(
      (sum, transction) => sum + transction.amount,
      0
    );

    //all  transction
    const lastTransction = [
      ...(await income.find({ userId }).sort({ date: -1 })).map((txn) => ({
        ...txn.toObject(),
        type: "income",
      })),
      ...(await expense.find({ userId }).sort({ date: -1 })).map((txn) => ({
        ...txn.toObject(),
        type: "expense",
      })),
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json({
      totalBalance:
        (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
      totalIncome: totalIncome[0]?.total || 0,
      totalExpense: totalExpense[0]?.total || 0,
      last30DaysExpense: {
        total: expenseLast30Days,
        transaction: last30DaysExpenseTransction,
      },
      last60DaysIncome: {
        total: incomeLast60Days,
        transaction: last60DaysIncomeTransction,
      },
      recentTranscation: lastTransction,
    });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};
